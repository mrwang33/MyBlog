package com.mb.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ArticleExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public ArticleExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andArticleIdIsNull() {
            addCriterion("article_id is null");
            return (Criteria) this;
        }

        public Criteria andArticleIdIsNotNull() {
            addCriterion("article_id is not null");
            return (Criteria) this;
        }

        public Criteria andArticleIdEqualTo(String value) {
            addCriterion("article_id =", value, "articleId");
            return (Criteria) this;
        }

        public Criteria andArticleIdNotEqualTo(String value) {
            addCriterion("article_id <>", value, "articleId");
            return (Criteria) this;
        }

        public Criteria andArticleIdGreaterThan(String value) {
            addCriterion("article_id >", value, "articleId");
            return (Criteria) this;
        }

        public Criteria andArticleIdGreaterThanOrEqualTo(String value) {
            addCriterion("article_id >=", value, "articleId");
            return (Criteria) this;
        }

        public Criteria andArticleIdLessThan(String value) {
            addCriterion("article_id <", value, "articleId");
            return (Criteria) this;
        }

        public Criteria andArticleIdLessThanOrEqualTo(String value) {
            addCriterion("article_id <=", value, "articleId");
            return (Criteria) this;
        }

        public Criteria andArticleIdLike(String value) {
            addCriterion("article_id like", value, "articleId");
            return (Criteria) this;
        }

        public Criteria andArticleIdNotLike(String value) {
            addCriterion("article_id not like", value, "articleId");
            return (Criteria) this;
        }

        public Criteria andArticleIdIn(List<String> values) {
            addCriterion("article_id in", values, "articleId");
            return (Criteria) this;
        }

        public Criteria andArticleIdNotIn(List<String> values) {
            addCriterion("article_id not in", values, "articleId");
            return (Criteria) this;
        }

        public Criteria andArticleIdBetween(String value1, String value2) {
            addCriterion("article_id between", value1, value2, "articleId");
            return (Criteria) this;
        }

        public Criteria andArticleIdNotBetween(String value1, String value2) {
            addCriterion("article_id not between", value1, value2, "articleId");
            return (Criteria) this;
        }

        public Criteria andArticleTitleIsNull() {
            addCriterion("article_title is null");
            return (Criteria) this;
        }

        public Criteria andArticleTitleIsNotNull() {
            addCriterion("article_title is not null");
            return (Criteria) this;
        }

        public Criteria andArticleTitleEqualTo(String value) {
            addCriterion("article_title =", value, "articleTitle");
            return (Criteria) this;
        }

        public Criteria andArticleTitleNotEqualTo(String value) {
            addCriterion("article_title <>", value, "articleTitle");
            return (Criteria) this;
        }

        public Criteria andArticleTitleGreaterThan(String value) {
            addCriterion("article_title >", value, "articleTitle");
            return (Criteria) this;
        }

        public Criteria andArticleTitleGreaterThanOrEqualTo(String value) {
            addCriterion("article_title >=", value, "articleTitle");
            return (Criteria) this;
        }

        public Criteria andArticleTitleLessThan(String value) {
            addCriterion("article_title <", value, "articleTitle");
            return (Criteria) this;
        }

        public Criteria andArticleTitleLessThanOrEqualTo(String value) {
            addCriterion("article_title <=", value, "articleTitle");
            return (Criteria) this;
        }

        public Criteria andArticleTitleLike(String value) {
            addCriterion("article_title like", value, "articleTitle");
            return (Criteria) this;
        }

        public Criteria andArticleTitleNotLike(String value) {
            addCriterion("article_title not like", value, "articleTitle");
            return (Criteria) this;
        }

        public Criteria andArticleTitleIn(List<String> values) {
            addCriterion("article_title in", values, "articleTitle");
            return (Criteria) this;
        }

        public Criteria andArticleTitleNotIn(List<String> values) {
            addCriterion("article_title not in", values, "articleTitle");
            return (Criteria) this;
        }

        public Criteria andArticleTitleBetween(String value1, String value2) {
            addCriterion("article_title between", value1, value2, "articleTitle");
            return (Criteria) this;
        }

        public Criteria andArticleTitleNotBetween(String value1, String value2) {
            addCriterion("article_title not between", value1, value2, "articleTitle");
            return (Criteria) this;
        }

        public Criteria andArticleDateIsNull() {
            addCriterion("article_date is null");
            return (Criteria) this;
        }

        public Criteria andArticleDateIsNotNull() {
            addCriterion("article_date is not null");
            return (Criteria) this;
        }

        public Criteria andArticleDateEqualTo(Date value) {
            addCriterion("article_date =", value, "articleDate");
            return (Criteria) this;
        }

        public Criteria andArticleDateNotEqualTo(Date value) {
            addCriterion("article_date <>", value, "articleDate");
            return (Criteria) this;
        }

        public Criteria andArticleDateGreaterThan(Date value) {
            addCriterion("article_date >", value, "articleDate");
            return (Criteria) this;
        }

        public Criteria andArticleDateGreaterThanOrEqualTo(Date value) {
            addCriterion("article_date >=", value, "articleDate");
            return (Criteria) this;
        }

        public Criteria andArticleDateLessThan(Date value) {
            addCriterion("article_date <", value, "articleDate");
            return (Criteria) this;
        }

        public Criteria andArticleDateLessThanOrEqualTo(Date value) {
            addCriterion("article_date <=", value, "articleDate");
            return (Criteria) this;
        }

        public Criteria andArticleDateIn(List<Date> values) {
            addCriterion("article_date in", values, "articleDate");
            return (Criteria) this;
        }

        public Criteria andArticleDateNotIn(List<Date> values) {
            addCriterion("article_date not in", values, "articleDate");
            return (Criteria) this;
        }

        public Criteria andArticleDateBetween(Date value1, Date value2) {
            addCriterion("article_date between", value1, value2, "articleDate");
            return (Criteria) this;
        }

        public Criteria andArticleDateNotBetween(Date value1, Date value2) {
            addCriterion("article_date not between", value1, value2, "articleDate");
            return (Criteria) this;
        }

        public Criteria andArticleKeywordsIsNull() {
            addCriterion("article_keywords is null");
            return (Criteria) this;
        }

        public Criteria andArticleKeywordsIsNotNull() {
            addCriterion("article_keywords is not null");
            return (Criteria) this;
        }

        public Criteria andArticleKeywordsEqualTo(String value) {
            addCriterion("article_keywords =", value, "articleKeywords");
            return (Criteria) this;
        }

        public Criteria andArticleKeywordsNotEqualTo(String value) {
            addCriterion("article_keywords <>", value, "articleKeywords");
            return (Criteria) this;
        }

        public Criteria andArticleKeywordsGreaterThan(String value) {
            addCriterion("article_keywords >", value, "articleKeywords");
            return (Criteria) this;
        }

        public Criteria andArticleKeywordsGreaterThanOrEqualTo(String value) {
            addCriterion("article_keywords >=", value, "articleKeywords");
            return (Criteria) this;
        }

        public Criteria andArticleKeywordsLessThan(String value) {
            addCriterion("article_keywords <", value, "articleKeywords");
            return (Criteria) this;
        }

        public Criteria andArticleKeywordsLessThanOrEqualTo(String value) {
            addCriterion("article_keywords <=", value, "articleKeywords");
            return (Criteria) this;
        }

        public Criteria andArticleKeywordsLike(String value) {
            addCriterion("article_keywords like", value, "articleKeywords");
            return (Criteria) this;
        }

        public Criteria andArticleKeywordsNotLike(String value) {
            addCriterion("article_keywords not like", value, "articleKeywords");
            return (Criteria) this;
        }

        public Criteria andArticleKeywordsIn(List<String> values) {
            addCriterion("article_keywords in", values, "articleKeywords");
            return (Criteria) this;
        }

        public Criteria andArticleKeywordsNotIn(List<String> values) {
            addCriterion("article_keywords not in", values, "articleKeywords");
            return (Criteria) this;
        }

        public Criteria andArticleKeywordsBetween(String value1, String value2) {
            addCriterion("article_keywords between", value1, value2, "articleKeywords");
            return (Criteria) this;
        }

        public Criteria andArticleKeywordsNotBetween(String value1, String value2) {
            addCriterion("article_keywords not between", value1, value2, "articleKeywords");
            return (Criteria) this;
        }

        public Criteria andArticleViewsIsNull() {
            addCriterion("article_views is null");
            return (Criteria) this;
        }

        public Criteria andArticleViewsIsNotNull() {
            addCriterion("article_views is not null");
            return (Criteria) this;
        }

        public Criteria andArticleViewsEqualTo(Integer value) {
            addCriterion("article_views =", value, "articleViews");
            return (Criteria) this;
        }

        public Criteria andArticleViewsNotEqualTo(Integer value) {
            addCriterion("article_views <>", value, "articleViews");
            return (Criteria) this;
        }

        public Criteria andArticleViewsGreaterThan(Integer value) {
            addCriterion("article_views >", value, "articleViews");
            return (Criteria) this;
        }

        public Criteria andArticleViewsGreaterThanOrEqualTo(Integer value) {
            addCriterion("article_views >=", value, "articleViews");
            return (Criteria) this;
        }

        public Criteria andArticleViewsLessThan(Integer value) {
            addCriterion("article_views <", value, "articleViews");
            return (Criteria) this;
        }

        public Criteria andArticleViewsLessThanOrEqualTo(Integer value) {
            addCriterion("article_views <=", value, "articleViews");
            return (Criteria) this;
        }

        public Criteria andArticleViewsIn(List<Integer> values) {
            addCriterion("article_views in", values, "articleViews");
            return (Criteria) this;
        }

        public Criteria andArticleViewsNotIn(List<Integer> values) {
            addCriterion("article_views not in", values, "articleViews");
            return (Criteria) this;
        }

        public Criteria andArticleViewsBetween(Integer value1, Integer value2) {
            addCriterion("article_views between", value1, value2, "articleViews");
            return (Criteria) this;
        }

        public Criteria andArticleViewsNotBetween(Integer value1, Integer value2) {
            addCriterion("article_views not between", value1, value2, "articleViews");
            return (Criteria) this;
        }

        public Criteria andArticleStarsIsNull() {
            addCriterion("article_stars is null");
            return (Criteria) this;
        }

        public Criteria andArticleStarsIsNotNull() {
            addCriterion("article_stars is not null");
            return (Criteria) this;
        }

        public Criteria andArticleStarsEqualTo(Integer value) {
            addCriterion("article_stars =", value, "articleStars");
            return (Criteria) this;
        }

        public Criteria andArticleStarsNotEqualTo(Integer value) {
            addCriterion("article_stars <>", value, "articleStars");
            return (Criteria) this;
        }

        public Criteria andArticleStarsGreaterThan(Integer value) {
            addCriterion("article_stars >", value, "articleStars");
            return (Criteria) this;
        }

        public Criteria andArticleStarsGreaterThanOrEqualTo(Integer value) {
            addCriterion("article_stars >=", value, "articleStars");
            return (Criteria) this;
        }

        public Criteria andArticleStarsLessThan(Integer value) {
            addCriterion("article_stars <", value, "articleStars");
            return (Criteria) this;
        }

        public Criteria andArticleStarsLessThanOrEqualTo(Integer value) {
            addCriterion("article_stars <=", value, "articleStars");
            return (Criteria) this;
        }

        public Criteria andArticleStarsIn(List<Integer> values) {
            addCriterion("article_stars in", values, "articleStars");
            return (Criteria) this;
        }

        public Criteria andArticleStarsNotIn(List<Integer> values) {
            addCriterion("article_stars not in", values, "articleStars");
            return (Criteria) this;
        }

        public Criteria andArticleStarsBetween(Integer value1, Integer value2) {
            addCriterion("article_stars between", value1, value2, "articleStars");
            return (Criteria) this;
        }

        public Criteria andArticleStarsNotBetween(Integer value1, Integer value2) {
            addCriterion("article_stars not between", value1, value2, "articleStars");
            return (Criteria) this;
        }

        public Criteria andArtClasIsNull() {
            addCriterion("art_clas is null");
            return (Criteria) this;
        }

        public Criteria andArtClasIsNotNull() {
            addCriterion("art_clas is not null");
            return (Criteria) this;
        }

        public Criteria andArtClasEqualTo(Integer value) {
            addCriterion("art_clas =", value, "artClas");
            return (Criteria) this;
        }

        public Criteria andArtClasNotEqualTo(Integer value) {
            addCriterion("art_clas <>", value, "artClas");
            return (Criteria) this;
        }

        public Criteria andArtClasGreaterThan(Integer value) {
            addCriterion("art_clas >", value, "artClas");
            return (Criteria) this;
        }

        public Criteria andArtClasGreaterThanOrEqualTo(Integer value) {
            addCriterion("art_clas >=", value, "artClas");
            return (Criteria) this;
        }

        public Criteria andArtClasLessThan(Integer value) {
            addCriterion("art_clas <", value, "artClas");
            return (Criteria) this;
        }

        public Criteria andArtClasLessThanOrEqualTo(Integer value) {
            addCriterion("art_clas <=", value, "artClas");
            return (Criteria) this;
        }

        public Criteria andArtClasIn(List<Integer> values) {
            addCriterion("art_clas in", values, "artClas");
            return (Criteria) this;
        }

        public Criteria andArtClasNotIn(List<Integer> values) {
            addCriterion("art_clas not in", values, "artClas");
            return (Criteria) this;
        }

        public Criteria andArtClasBetween(Integer value1, Integer value2) {
            addCriterion("art_clas between", value1, value2, "artClas");
            return (Criteria) this;
        }

        public Criteria andArtClasNotBetween(Integer value1, Integer value2) {
            addCriterion("art_clas not between", value1, value2, "artClas");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}