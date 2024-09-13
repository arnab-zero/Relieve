package com.lannister.relieve_backend.mapper;

import com.lannister.relieve_backend.dto.DonationDto;
import com.lannister.relieve_backend.entity.Donation;

public class DonationMapper {

    public static DonationDto mapToDonationDto(Donation donation) {
        DonationDto donationDto = new DonationDto();

        donationDto.setDonationCallId(donation.getDonationCallId());
        donationDto.setEventId(donation.getEventId());
        donationDto.setReceivedAt(donation.getReceivedAt());
        donationDto.setAmount(donation.getAmount());
        donationDto.setDescription(donation.getDescription());

        return donationDto;
    }

    public static Donation mapToDonation(DonationDto donationDto) {
        Donation donation = new Donation();

        donation.setDonationCallId(donationDto.getDonationCallId());
        donation.setEventId(donationDto.getEventId());
        donation.setReceivedAt(donationDto.getReceivedAt());
        donation.setAmount(donationDto.getAmount());
        donation.setDescription(donationDto.getDescription());

        return donation;
    }

}
