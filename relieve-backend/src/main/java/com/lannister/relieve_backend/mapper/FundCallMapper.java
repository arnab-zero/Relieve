package com.lannister.relieve_backend.mapper;

import com.lannister.relieve_backend.dto.FundCallDto;
import com.lannister.relieve_backend.entity.FundCall;

public class FundCallMapper {
    public static FundCallDto mapToFundCallDto(FundCall fundCall) {
        FundCallDto fundCallDto = new FundCallDto();

        fundCallDto.setEventId(fundCall.getEventId());
        fundCallDto.setTitle(fundCall.getTitle());
        fundCallDto.setCreatedAt(fundCall.getCreatedAt());
        fundCallDto.setDescription(fundCall.getDescription());
        fundCallDto.setTargetAmount(fundCall.getTargetAmount());
        fundCallDto.setReceivedAmount(fundCall.getReceivedAmount());
        fundCallDto.setDeadline(fundCall.getDeadline());

        return fundCallDto;
    }

    public static FundCall mapToFundCall(FundCallDto fundCallDto){
        FundCall fundCall = new FundCall();

        fundCall.setEventId(fundCallDto.getEventId());
        fundCall.setTitle(fundCallDto.getTitle());
        fundCall.setCreatedAt(fundCallDto.getCreatedAt());
        fundCall.setDescription(fundCallDto.getDescription());
        fundCall.setTargetAmount(fundCallDto.getTargetAmount());
        fundCall.setReceivedAmount(fundCallDto.getReceivedAmount());
        fundCall.setDeadline(fundCallDto.getDeadline());

        return fundCall;
    }
}
