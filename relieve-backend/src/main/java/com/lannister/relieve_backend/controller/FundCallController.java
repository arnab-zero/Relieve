package com.lannister.relieve_backend.controller;

import com.lannister.relieve_backend.dto.FundCallDto;
import com.lannister.relieve_backend.service.FundCallService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/fund-call")
public class FundCallController {

    private FundCallService fundCallService;

    @PostMapping
    public ResponseEntity<String> createFundCall(@RequestBody FundCallDto fundCallDto) {
        FundCallDto savedFundCall = fundCallService.createFundCall(fundCallDto);
        return new ResponseEntity<>("Fund call Created Successfully!", HttpStatus.CREATED);
    }

    @GetMapping("{fundCallId}")
    public ResponseEntity<FundCallDto> getFundCallById(@PathVariable("fundCallId") Long fundCallId) {
        FundCallDto fundCallDto = fundCallService.getFundCallById(fundCallId);
        if (fundCallDto != null) {
            return ResponseEntity.ok(fundCallDto);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<List<FundCallDto>> getAllFundCalls() {
        List<FundCallDto> fundCalls = fundCallService.getAllFundCalls();
        return ResponseEntity.ok(fundCalls);
    }

    @PutMapping("{fundCallId}")
    public ResponseEntity<String> updateFundCall(@PathVariable("fundCallId") Long fundCallId, @RequestBody FundCallDto updatedFundCall) {
        FundCallDto fundCallDto = fundCallService.updateFundCall(fundCallId, updatedFundCall);
        return ResponseEntity.ok("Fund call updated successfully!");
    }

    @DeleteMapping("{fundCallId}")
    public ResponseEntity<String> deleteFundCall(@PathVariable("fundCallId") Long fundCallId) {
        fundCallService.deleteFundCall(fundCallId);
        return ResponseEntity.ok("Fund call deleted successfully!");
    }

}
