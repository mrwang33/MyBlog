package com.mb.service.impl;

import java.io.Serializable;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mb.dao.IntroductionMapper;
import com.mb.entity.Introduction;
import com.mb.service.IntroductionService;

@Service("introductionService")
public class IntroductionServiceImpl implements IntroductionService {
	@Resource
	private IntroductionMapper introductionMapper;
	
	@Override
	public List<Introduction> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Introduction getById(Serializable id) {
		return introductionMapper.getById(id);
	}

	@Override
	public int insert(Introduction t) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int update(Introduction t) throws Exception {
		return introductionMapper.update(t);
	}

	@Override
	public int delete(Serializable id) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteList(Serializable[] ids) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

}
