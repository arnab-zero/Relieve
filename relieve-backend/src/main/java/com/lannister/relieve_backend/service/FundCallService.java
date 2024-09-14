package com.lannister.relieve_backend.service;

import com.lannister.relieve_backend.dto.FundCallDto;

import java.util.List;

public interface FundCallService {
    FundCallDto createFundCall(FundCallDto fundCallDto);
    FundCallDto getFundCallById(Long fundCallId);
    List<FundCallDto> getAllFundCalls();
    FundCallDto updateFundCall(Long fundCallId, FundCallDto updatedFundCall);
    void deleteFundCall(Long fundCallId);
}
