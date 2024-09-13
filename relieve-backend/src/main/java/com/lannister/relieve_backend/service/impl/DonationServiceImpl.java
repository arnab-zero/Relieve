package com.lannister.relieve_backend.service.impl;

import com.lannister.relieve_backend.dto.DonationDto;
import com.lannister.relieve_backend.entity.Donation;
import com.lannister.relieve_backend.exception.ResourceNotFoundException;
import com.lannister.relieve_backend.mapper.DonationMapper;
import com.lannister.relieve_backend.repository.DonationRepository;
import com.lannister.relieve_backend.service.DonationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DonationServiceImpl implements DonationService {

    private DonationRepository donationRepository;

    @Override
    public DonationDto createDonation(DonationDto donationDto) {
        Donation donation = DonationMapper.mapToDonation(donationDto);
        Donation savedDonation = donationRepository.save(donation);
        return DonationMapper.mapToDonationDto((savedDonation));
    }

    @Override
    public DonationDto getDonationById(Long donationId) {
        Donation donation = donationRepository.findById(donationId)
                .orElseThrow(() -> new ResourceNotFoundException("No donation found with id: " + donationId));
        return DonationMapper.mapToDonationDto(donation);
    }

    @Override
    public List<DonationDto> getAllDonations() {
        List<Donation> donations = donationRepository.findAll();
        return donations.stream()
                .map((donation) -> DonationMapper.mapToDonationDto(donation))
                .collect(Collectors.toList());
    }

    @Override
    public DonationDto updateDonation(Long donationId, DonationDto updatedDonation) {
        Donation donation = donationRepository.findById(donationId)
                .orElseThrow(() -> new ResourceNotFoundException("No donation found with id: " + donationId));

        DonationDto donationDto = new DonationDto();

        donation.setDonationId(updatedDonation.getDonationId());
        donation.setDonationCallId(updatedDonation.getDonationCallId());
        donation.setEventId(updatedDonation.getEventId());
        donation.setReceivedAt(updatedDonation.getReceivedAt());
        donation.setAmount(updatedDonation.getAmount());
        donation.setDescription(updatedDonation.getDescription());

        Donation updatedDonationObj = donationRepository.save(donation);
        return DonationMapper.mapToDonationDto(updatedDonationObj);
    }

    @Override
    public void deleteDonation(Long donationId) {
        Donation donation = donationRepository.findById(donationId)
                .orElseThrow(() -> new ResourceNotFoundException("Donation not found with Id: " + donationId));
        donationRepository.deleteById(donationId);
    }
}

