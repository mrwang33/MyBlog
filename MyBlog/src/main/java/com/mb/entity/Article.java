package com.mb.entity;

import java.io.Serializable;
import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * @author 王欢
 * 博文实体类
 */
public class Article implements Serializable{
	private static final long serialVersionUID = -5766288268819637751L;
	//主键
    private String articleId;
    //博文标题
    private String articleTitle;
    //博文发表时间
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")  
    private Timestamp articleDate;
    //博文关键字
    private String articleKeywords;
    //博文被浏览次数
    private Integer articleViews;
    //博文被点赞数
    private Integer articleStars;
    //博文内容
    private String articleContent;
    //博文种类
    private Classify classify;
    
    
	public Article() {
	}

	public Article(String articleId, String articleTitle, Timestamp articleDate, String articleKeywords,
			Integer articleViews, Integer articleStars, Classify classify, String articleContent) {
		this.articleId = articleId;
		this.articleTitle = articleTitle;
		this.articleDate = articleDate;
		this.articleKeywords = articleKeywords;
		this.articleViews = articleViews;
		this.articleStars = articleStars;
		this.classify = classify;
		this.articleContent = articleContent;
	}

	public String getArticleId() {
		return articleId;
	}

	public void setArticleId(String articleId) {
		this.articleId = articleId;
	}

	public String getArticleTitle() {
		return articleTitle;
	}

	public void setArticleTitle(String articleTitle) {
		this.articleTitle = articleTitle;
	}

	public Timestamp getArticleDate() {
		return articleDate;
	}

	public void setArticleDate(Timestamp articleDate) {
		this.articleDate = articleDate;
	}

	public String getArticleKeywords() {
		return articleKeywords;
	}

	public void setArticleKeywords(String articleKeywords) {
		this.articleKeywords = articleKeywords;
	}

	public Integer getArticleViews() {
		return articleViews;
	}

	public void setArticleViews(Integer articleViews) {
		this.articleViews = articleViews;
	}

	public Integer getArticleStars() {
		return articleStars;
	}

	public void setArticleStars(Integer articleStars) {
		this.articleStars = articleStars;
	}

	public Classify getClassify() {
		return classify;
	}

	public void setClassify(Classify classify) {
		this.classify = classify;
	}

	public String getArticleContent() {
		return articleContent;
	}

	public void setArticleContent(String articleContent) {
		this.articleContent = articleContent;
	}

    
    
}