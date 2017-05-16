package com.mb.service.impl;

import java.io.Serializable;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mb.dao.ClassifyMapper;
import com.mb.entity.Classify;
import com.mb.service.ClassifyService;

@Service("classifyService")
public class ClassifyServiceImpl implements ClassifyService{
	@Resource
	private ClassifyMapper classifyMapper;
	
	@Override
	public List<Classify> getAll() {
		return classifyMapper.getAll();
	}

	@Override
	public Classify getById(Serializable id) {
		return classifyMapper.getById(id);
	}

	@Override
	public int insert(Classify t) throws Exception {
		return classifyMapper.insert(t);
	}

	@Override
	public int update(Classify t) throws Exception {
		return classifyMapper.update(t);
	}

	@Override
	public int delete(Serializable id) throws Exception {
		return classifyMapper.delete(id);
	}

	@Override
	public int deleteList(Serializable[] ids) throws Exception {
		return classifyMapper.deleteList(ids);
	}
	
}
