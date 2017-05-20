package com.mb.service;

import com.mb.common.Page;
import com.mb.entity.Article;

public interface ArticleService extends BaseService<Article> {
	//查找出分类页
	public Page<Article> getPage(Page<Article> page);
	//获取总记录数
	public int getCount();
}
