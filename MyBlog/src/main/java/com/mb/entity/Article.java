package com.mb.entity;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

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
    //是否置顶
    private boolean isStick;
    //关键词list方便前端显示(偷懒 不想改了)
    private List<String> keyWordList;
    
	public Article() {
	}

	public Article(String articleId, String articleTitle, Timestamp articleDate, String articleKeywords,
			Integer articleViews, Integer articleStars, String articleContent, Classify classify, boolean isStick,
			List<String> keyWordList) {
		super();
		this.articleId = articleId;
		this.articleTitle = articleTitle;
		this.articleDate = articleDate;
		this.articleKeywords = articleKeywords;
		this.articleViews = articleViews;
		this.articleStars = articleStars;
		this.articleContent = articleContent;
		this.classify = classify;
		this.isStick = isStick;
		this.keyWordList = keyWordList;
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

	public List<String> getKeyWordList() {
		return keyWordList;
	}

	public void setKeyWordList(List<String> keyWordList) {
		this.keyWordList = keyWordList;
	}

	public boolean getIsStick() {
		return isStick;
	}

	public void setIsStick(boolean isStick) {
		this.isStick = isStick;
	}

    
    
}