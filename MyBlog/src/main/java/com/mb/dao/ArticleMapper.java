package com.mb.dao;

import java.util.List;

import com.mb.common.Page;
import com.mb.entity.Article;

public interface ArticleMapper extends BaseMapper<Article>{
	//查找出分类
	public List<Article> getPage(Page<Article> page);
	//查找出总记录数
	public int getCount();
}