package com.lannister.relieve_backend.service;

import com.lannister.relieve_backend.dto.DonationDto;
import com.lannister.relieve_backend.dto.IncidentDto;

import java.util.List;

public interface DonationService {

    DonationDto createDonation(DonationDto donationDto);
    DonationDto getDonationById(Long donationId);
    List<DonationDto> getAllDonations();
    DonationDto updateDonation(Long donationId, DonationDto updatedDonation);
    void deleteDonation(Long donationId);
}
