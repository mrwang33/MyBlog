package com.mb.service.impl;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mb.common.CommonUtils;
import com.mb.common.Page;
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
		Article article = articleMapper.getById(id);
		article.setKeyWordList(CommonUtils.dealKeyWords(article));
		return article;
	}

	@Override
	public int insert(Article article) throws Exception {
		article.setArticleId(CommonUtils.getUUID());
		article.setArticleDate(new Timestamp(new Date().getTime()));
		article.setArticleViews(0);
		article.setArticleStars(0);
		return articleMapper.insert(article);
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

	@Override
	public Page<Article> getPage(Page<Article> page) {
		List<Article> list = articleMapper.getPage(page);
		for (Article article : list) {
			List<String> keyWordList = CommonUtils.dealKeyWords(article);
			article.setKeyWordList(keyWordList);
		}
		//截取内容
		for (Article article : list) {
			String content = article.getArticleContent();
			String replaceAll = content.replaceAll("</?[^>]+>", "");
			if (replaceAll!=null&&!"".equals(replaceAll)) {
				replaceAll = replaceAll.substring(0, replaceAll.length()-1>150 ? 150 : replaceAll.length()-1);
			}
			article.setArticleContent(replaceAll);
		}
		page.setPageList(list);
		return page;
	}

	@Override
	public int getCount(String keyWords,String classifyId) {
		return articleMapper.getCount(keyWords,classifyId);
	}

	@Override
	public void addView(Article article) throws Exception {
		article.setArticleViews(article.getArticleViews()+1);
		articleMapper.update(article);
	}

	@Override
	public List<Article> getHotArticles() {
		return articleMapper.getHotArticles();
	}


	
}
