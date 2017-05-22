package com.mb.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mb.common.Page;
import com.mb.entity.Article;

public interface ArticleMapper extends BaseMapper<Article>{
	//查找出分类
	public List<Article> getPage(Page<Article> page);
	//查找出总记录数
	public int getCount(@Param("keyWords")String keyWords,@Param("classifyId")String classifyId);
	//获取热门博客
	public List<Article> getHotArticles();
}