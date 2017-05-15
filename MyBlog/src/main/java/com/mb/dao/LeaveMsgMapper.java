package com.mb.dao;

import com.mb.entity.LeaveMsg;
import com.mb.entity.LeaveMsgExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface LeaveMsgMapper {
    int countByExample(LeaveMsgExample example);

    int deleteByExample(LeaveMsgExample example);

    int deleteByPrimaryKey(String lmId);

    int insert(LeaveMsg record);

    int insertSelective(LeaveMsg record);

    List<LeaveMsg> selectByExample(LeaveMsgExample example);

    LeaveMsg selectByPrimaryKey(String lmId);

    int updateByExampleSelective(@Param("record") LeaveMsg record, @Param("example") LeaveMsgExample example);

    int updateByExample(@Param("record") LeaveMsg record, @Param("example") LeaveMsgExample example);

    int updateByPrimaryKeySelective(LeaveMsg record);

    int updateByPrimaryKey(LeaveMsg record);
}