package com.mb.entity;

import java.util.Date;

public class Article {
    private String articleId;

    private String articleTitle;

    private Date articleDate;

    private String articleKeywords;

    private Integer articleViews;

    private Integer articleStars;

    private Integer artClas;

    private String articleContent;

    public String getArticleId() {
        return articleId;
    }

    public void setArticleId(String articleId) {
        this.articleId = articleId == null ? null : articleId.trim();
    }

    public String getArticleTitle() {
        return articleTitle;
    }

    public void setArticleTitle(String articleTitle) {
        this.articleTitle = articleTitle == null ? null : articleTitle.trim();
    }

    public Date getArticleDate() {
        return articleDate;
    }

    public void setArticleDate(Date articleDate) {
        this.articleDate = articleDate;
    }

    public String getArticleKeywords() {
        return articleKeywords;
    }

    public void setArticleKeywords(String articleKeywords) {
        this.articleKeywords = articleKeywords == null ? null : articleKeywords.trim();
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

    public Integer getArtClas() {
        return artClas;
    }

    public void setArtClas(Integer artClas) {
        this.artClas = artClas;
    }

    public String getArticleContent() {
        return articleContent;
    }

    public void setArticleContent(String articleContent) {
        this.articleContent = articleContent == null ? null : articleContent.trim();
    }
}