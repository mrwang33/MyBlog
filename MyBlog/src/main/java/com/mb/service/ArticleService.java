package com.mb.service;

import java.util.List;

import com.mb.common.Page;
import com.mb.entity.Article;

public interface ArticleService extends BaseService<Article> {
	//查找出分类页
	public Page<Article> getPage(Page<Article> page);
	/**
	 * 获取总记录数
	 * @param keyWords 搜索词
	 * @param classifyId 分类id
	 * @return
	 */
	public int getCount(String keyWords,String classifyId);
	//增加浏览次数
	public void addView(Article article) throws Exception;
	
	/**
	 * 获取热门微博
	 * @return
	 */
	public List<Article> getHotArticles();
}
