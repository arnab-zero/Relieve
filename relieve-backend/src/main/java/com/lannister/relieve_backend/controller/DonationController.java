package com.lannister.relieve_backend.controller;

import com.lannister.relieve_backend.dto.DonationDto;
import com.lannister.relieve_backend.service.DonationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/donation")
public class DonationController {

    private DonationService donationService;

    @PostMapping
    public ResponseEntity<String> createDonation(@RequestBody DonationDto donationDto){
        DonationDto savedDonation = donationService.createDonation(donationDto);
        return new ResponseEntity<>("Donation Created Successfully!", HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<DonationDto> getDonationById(@PathVariable("id") Long donationId){
        DonationDto donationDto = donationService.getDonationById(donationId);
        if(donationDto != null) {
            return ResponseEntity.ok(donationDto);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<List<DonationDto>> getAllDonations() {
        List<DonationDto> donations = donationService.getAllDonations();
        return ResponseEntity.ok(donations);
    }

    @PutMapping("{donationId}")
    public ResponseEntity<String> updateDonation(@PathVariable("donationId") Long donationId, @RequestBody DonationDto updatedDonation){
        DonationDto donationDto = donationService.updateDonation(donationId, updatedDonation);
        return ResponseEntity.ok("Donation updated successfully!");
    }

    @DeleteMapping("{donationId}")
    public ResponseEntity<String> deleteDonation(@PathVariable("donationId") Long donationId){
        donationService.deleteDonation(donationId);
        return ResponseEntity.ok("Donation deleted successfully!");
    }

}
