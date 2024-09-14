package com.lannister.relieve_backend.service.impl;

import com.lannister.relieve_backend.dto.FundCallDto;
import com.lannister.relieve_backend.entity.FundCall;
import com.lannister.relieve_backend.exception.ResourceNotFoundException;
import com.lannister.relieve_backend.mapper.FundCallMapper;
import com.lannister.relieve_backend.repository.FundCallRepository;
import com.lannister.relieve_backend.service.FundCallService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class FundCallServiceImpl implements FundCallService {

    private FundCallRepository fundCallRepository;

    @Override
    public FundCallDto createFundCall(FundCallDto fundCallDto) {
        FundCall fundCall = FundCallMapper.mapToFundCall(fundCallDto);
        FundCall savedFundCall = fundCallRepository.save(fundCall);
        return FundCallMapper.mapToFundCallDto(savedFundCall);
    }

    @Override
    public FundCallDto getFundCallById(Long fundCallId) {
        FundCall fundCall = fundCallRepository.findById(fundCallId)
                .orElseThrow(() -> new ResourceNotFoundException("No fund call found with id: " + fundCallId));
        return FundCallMapper.mapToFundCallDto(fundCall);
    }

    @Override
    public List<FundCallDto> getAllFundCalls() {
        List<FundCall> fundCalls = fundCallRepository.findAll();
        return fundCalls.stream()
                .map(FundCallMapper::mapToFundCallDto)
                .collect(Collectors.toList());
    }

    @Override
    public FundCallDto updateFundCall(Long fundCallId, FundCallDto updatedFundCall) {
        FundCall fundCall = fundCallRepository.findById(fundCallId)
                .orElseThrow(() -> new ResourceNotFoundException("No fund call found with id: " + fundCallId));

        fundCall.setEventId(updatedFundCall.getEventId());
        fundCall.setTitle(updatedFundCall.getTitle());
        fundCall.setCreatedAt(updatedFundCall.getCreatedAt());
        fundCall.setDescription(updatedFundCall.getDescription());
        fundCall.setTargetAmount(updatedFundCall.getTargetAmount());
        fundCall.setReceivedAmount(updatedFundCall.getReceivedAmount());
        fundCall.setDeadline(updatedFundCall.getDeadline());

        FundCall updatedFundCallObj = fundCallRepository.save(fundCall);
        return FundCallMapper.mapToFundCallDto(updatedFundCallObj);
    }

    @Override
    public void deleteFundCall(Long fundCallId) {
        FundCall fundCall = fundCallRepository.findById(fundCallId)
                .orElseThrow(() -> new ResourceNotFoundException("Fund call not found with Id: " + fundCallId));
        fundCallRepository.deleteById(fundCallId);
    }
}
