package com.mb.service.impl;

import java.io.Serializable;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mb.dao.ArticleMapper;
import com.mb.entity.Article;
import com.mb.service.ArticleService;

@Service("articleService")
public class ArticleServiceImpl implements ArticleService {
	@Resource
	private ArticleMapper articleMapper;
	
	@Override
	public List<Article> getAll() {
		return articleMapper.getAll();
	}

	@Override
	public Article getById(Serializable id) {
		return articleMapper.getById(id);
	}

	@Override
	public int insert(Article t) throws Exception {
		return articleMapper.insert(t);
	}

	@Override
	public int update(Article t) throws Exception {
		return articleMapper.update(t);
	}

	@Override
	public int delete(Serializable id) throws Exception {
		return articleMapper.delete(id);
	}

	@Override
	public int deleteList(Serializable[] ids) throws Exception {
		return articleMapper.deleteList(ids);
	}

}
