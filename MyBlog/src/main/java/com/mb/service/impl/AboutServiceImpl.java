package com.mb.service.impl;

import java.io.Serializable;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mb.dao.AboutMapper;
import com.mb.entity.About;
import com.mb.service.AboutService;

@Service("aboutService")
public class AboutServiceImpl implements AboutService {
	@Resource
	private AboutMapper aboutMapper;
	
	@Override
	public List<About> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public About getById(Serializable id) {
		return aboutMapper.getById(id);
	}

	@Override
	public int insert(About t) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int update(About t) throws Exception {
		return aboutMapper.update(t);
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
