package com.mb.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class CommentExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public CommentExample() {
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

        public Criteria andCommentIdIsNull() {
            addCriterion("comment_id is null");
            return (Criteria) this;
        }

        public Criteria andCommentIdIsNotNull() {
            addCriterion("comment_id is not null");
            return (Criteria) this;
        }

        public Criteria andCommentIdEqualTo(String value) {
            addCriterion("comment_id =", value, "commentId");
            return (Criteria) this;
        }

        public Criteria andCommentIdNotEqualTo(String value) {
            addCriterion("comment_id <>", value, "commentId");
            return (Criteria) this;
        }

        public Criteria andCommentIdGreaterThan(String value) {
            addCriterion("comment_id >", value, "commentId");
            return (Criteria) this;
        }

        public Criteria andCommentIdGreaterThanOrEqualTo(String value) {
            addCriterion("comment_id >=", value, "commentId");
            return (Criteria) this;
        }

        public Criteria andCommentIdLessThan(String value) {
            addCriterion("comment_id <", value, "commentId");
            return (Criteria) this;
        }

        public Criteria andCommentIdLessThanOrEqualTo(String value) {
            addCriterion("comment_id <=", value, "commentId");
            return (Criteria) this;
        }

        public Criteria andCommentIdLike(String value) {
            addCriterion("comment_id like", value, "commentId");
            return (Criteria) this;
        }

        public Criteria andCommentIdNotLike(String value) {
            addCriterion("comment_id not like", value, "commentId");
            return (Criteria) this;
        }

        public Criteria andCommentIdIn(List<String> values) {
            addCriterion("comment_id in", values, "commentId");
            return (Criteria) this;
        }

        public Criteria andCommentIdNotIn(List<String> values) {
            addCriterion("comment_id not in", values, "commentId");
            return (Criteria) this;
        }

        public Criteria andCommentIdBetween(String value1, String value2) {
            addCriterion("comment_id between", value1, value2, "commentId");
            return (Criteria) this;
        }

        public Criteria andCommentIdNotBetween(String value1, String value2) {
            addCriterion("comment_id not between", value1, value2, "commentId");
            return (Criteria) this;
        }

        public Criteria andCommentContentIsNull() {
            addCriterion("comment_content is null");
            return (Criteria) this;
        }

        public Criteria andCommentContentIsNotNull() {
            addCriterion("comment_content is not null");
            return (Criteria) this;
        }

        public Criteria andCommentContentEqualTo(String value) {
            addCriterion("comment_content =", value, "commentContent");
            return (Criteria) this;
        }

        public Criteria andCommentContentNotEqualTo(String value) {
            addCriterion("comment_content <>", value, "commentContent");
            return (Criteria) this;
        }

        public Criteria andCommentContentGreaterThan(String value) {
            addCriterion("comment_content >", value, "commentContent");
            return (Criteria) this;
        }

        public Criteria andCommentContentGreaterThanOrEqualTo(String value) {
            addCriterion("comment_content >=", value, "commentContent");
            return (Criteria) this;
        }

        public Criteria andCommentContentLessThan(String value) {
            addCriterion("comment_content <", value, "commentContent");
            return (Criteria) this;
        }

        public Criteria andCommentContentLessThanOrEqualTo(String value) {
            addCriterion("comment_content <=", value, "commentContent");
            return (Criteria) this;
        }

        public Criteria andCommentContentLike(String value) {
            addCriterion("comment_content like", value, "commentContent");
            return (Criteria) this;
        }

        public Criteria andCommentContentNotLike(String value) {
            addCriterion("comment_content not like", value, "commentContent");
            return (Criteria) this;
        }

        public Criteria andCommentContentIn(List<String> values) {
            addCriterion("comment_content in", values, "commentContent");
            return (Criteria) this;
        }

        public Criteria andCommentContentNotIn(List<String> values) {
            addCriterion("comment_content not in", values, "commentContent");
            return (Criteria) this;
        }

        public Criteria andCommentContentBetween(String value1, String value2) {
            addCriterion("comment_content between", value1, value2, "commentContent");
            return (Criteria) this;
        }

        public Criteria andCommentContentNotBetween(String value1, String value2) {
            addCriterion("comment_content not between", value1, value2, "commentContent");
            return (Criteria) this;
        }

        public Criteria andCommentDateIsNull() {
            addCriterion("comment_date is null");
            return (Criteria) this;
        }

        public Criteria andCommentDateIsNotNull() {
            addCriterion("comment_date is not null");
            return (Criteria) this;
        }

        public Criteria andCommentDateEqualTo(Date value) {
            addCriterion("comment_date =", value, "commentDate");
            return (Criteria) this;
        }

        public Criteria andCommentDateNotEqualTo(Date value) {
            addCriterion("comment_date <>", value, "commentDate");
            return (Criteria) this;
        }

        public Criteria andCommentDateGreaterThan(Date value) {
            addCriterion("comment_date >", value, "commentDate");
            return (Criteria) this;
        }

        public Criteria andCommentDateGreaterThanOrEqualTo(Date value) {
            addCriterion("comment_date >=", value, "commentDate");
            return (Criteria) this;
        }

        public Criteria andCommentDateLessThan(Date value) {
            addCriterion("comment_date <", value, "commentDate");
            return (Criteria) this;
        }

        public Criteria andCommentDateLessThanOrEqualTo(Date value) {
            addCriterion("comment_date <=", value, "commentDate");
            return (Criteria) this;
        }

        public Criteria andCommentDateIn(List<Date> values) {
            addCriterion("comment_date in", values, "commentDate");
            return (Criteria) this;
        }

        public Criteria andCommentDateNotIn(List<Date> values) {
            addCriterion("comment_date not in", values, "commentDate");
            return (Criteria) this;
        }

        public Criteria andCommentDateBetween(Date value1, Date value2) {
            addCriterion("comment_date between", value1, value2, "commentDate");
            return (Criteria) this;
        }

        public Criteria andCommentDateNotBetween(Date value1, Date value2) {
            addCriterion("comment_date not between", value1, value2, "commentDate");
            return (Criteria) this;
        }

        public Criteria andCommentEmailIsNull() {
            addCriterion("comment_email is null");
            return (Criteria) this;
        }

        public Criteria andCommentEmailIsNotNull() {
            addCriterion("comment_email is not null");
            return (Criteria) this;
        }

        public Criteria andCommentEmailEqualTo(String value) {
            addCriterion("comment_email =", value, "commentEmail");
            return (Criteria) this;
        }

        public Criteria andCommentEmailNotEqualTo(String value) {
            addCriterion("comment_email <>", value, "commentEmail");
            return (Criteria) this;
        }

        public Criteria andCommentEmailGreaterThan(String value) {
            addCriterion("comment_email >", value, "commentEmail");
            return (Criteria) this;
        }

        public Criteria andCommentEmailGreaterThanOrEqualTo(String value) {
            addCriterion("comment_email >=", value, "commentEmail");
            return (Criteria) this;
        }

        public Criteria andCommentEmailLessThan(String value) {
            addCriterion("comment_email <", value, "commentEmail");
            return (Criteria) this;
        }

        public Criteria andCommentEmailLessThanOrEqualTo(String value) {
            addCriterion("comment_email <=", value, "commentEmail");
            return (Criteria) this;
        }

        public Criteria andCommentEmailLike(String value) {
            addCriterion("comment_email like", value, "commentEmail");
            return (Criteria) this;
        }

        public Criteria andCommentEmailNotLike(String value) {
            addCriterion("comment_email not like", value, "commentEmail");
            return (Criteria) this;
        }

        public Criteria andCommentEmailIn(List<String> values) {
            addCriterion("comment_email in", values, "commentEmail");
            return (Criteria) this;
        }

        public Criteria andCommentEmailNotIn(List<String> values) {
            addCriterion("comment_email not in", values, "commentEmail");
            return (Criteria) this;
        }

        public Criteria andCommentEmailBetween(String value1, String value2) {
            addCriterion("comment_email between", value1, value2, "commentEmail");
            return (Criteria) this;
        }

        public Criteria andCommentEmailNotBetween(String value1, String value2) {
            addCriterion("comment_email not between", value1, value2, "commentEmail");
            return (Criteria) this;
        }

        public Criteria andCommentNameIsNull() {
            addCriterion("comment_name is null");
            return (Criteria) this;
        }

        public Criteria andCommentNameIsNotNull() {
            addCriterion("comment_name is not null");
            return (Criteria) this;
        }

        public Criteria andCommentNameEqualTo(String value) {
            addCriterion("comment_name =", value, "commentName");
            return (Criteria) this;
        }

        public Criteria andCommentNameNotEqualTo(String value) {
            addCriterion("comment_name <>", value, "commentName");
            return (Criteria) this;
        }

        public Criteria andCommentNameGreaterThan(String value) {
            addCriterion("comment_name >", value, "commentName");
            return (Criteria) this;
        }

        public Criteria andCommentNameGreaterThanOrEqualTo(String value) {
            addCriterion("comment_name >=", value, "commentName");
            return (Criteria) this;
        }

        public Criteria andCommentNameLessThan(String value) {
            addCriterion("comment_name <", value, "commentName");
            return (Criteria) this;
        }

        public Criteria andCommentNameLessThanOrEqualTo(String value) {
            addCriterion("comment_name <=", value, "commentName");
            return (Criteria) this;
        }

        public Criteria andCommentNameLike(String value) {
            addCriterion("comment_name like", value, "commentName");
            return (Criteria) this;
        }

        public Criteria andCommentNameNotLike(String value) {
            addCriterion("comment_name not like", value, "commentName");
            return (Criteria) this;
        }

        public Criteria andCommentNameIn(List<String> values) {
            addCriterion("comment_name in", values, "commentName");
            return (Criteria) this;
        }

        public Criteria andCommentNameNotIn(List<String> values) {
            addCriterion("comment_name not in", values, "commentName");
            return (Criteria) this;
        }

        public Criteria andCommentNameBetween(String value1, String value2) {
            addCriterion("comment_name between", value1, value2, "commentName");
            return (Criteria) this;
        }

        public Criteria andCommentNameNotBetween(String value1, String value2) {
            addCriterion("comment_name not between", value1, value2, "commentName");
            return (Criteria) this;
        }

        public Criteria andComArtIdIsNull() {
            addCriterion("com_art_id is null");
            return (Criteria) this;
        }

        public Criteria andComArtIdIsNotNull() {
            addCriterion("com_art_id is not null");
            return (Criteria) this;
        }

        public Criteria andComArtIdEqualTo(String value) {
            addCriterion("com_art_id =", value, "comArtId");
            return (Criteria) this;
        }

        public Criteria andComArtIdNotEqualTo(String value) {
            addCriterion("com_art_id <>", value, "comArtId");
            return (Criteria) this;
        }

        public Criteria andComArtIdGreaterThan(String value) {
            addCriterion("com_art_id >", value, "comArtId");
            return (Criteria) this;
        }

        public Criteria andComArtIdGreaterThanOrEqualTo(String value) {
            addCriterion("com_art_id >=", value, "comArtId");
            return (Criteria) this;
        }

        public Criteria andComArtIdLessThan(String value) {
            addCriterion("com_art_id <", value, "comArtId");
            return (Criteria) this;
        }

        public Criteria andComArtIdLessThanOrEqualTo(String value) {
            addCriterion("com_art_id <=", value, "comArtId");
            return (Criteria) this;
        }

        public Criteria andComArtIdLike(String value) {
            addCriterion("com_art_id like", value, "comArtId");
            return (Criteria) this;
        }

        public Criteria andComArtIdNotLike(String value) {
            addCriterion("com_art_id not like", value, "comArtId");
            return (Criteria) this;
        }

        public Criteria andComArtIdIn(List<String> values) {
            addCriterion("com_art_id in", values, "comArtId");
            return (Criteria) this;
        }

        public Criteria andComArtIdNotIn(List<String> values) {
            addCriterion("com_art_id not in", values, "comArtId");
            return (Criteria) this;
        }

        public Criteria andComArtIdBetween(String value1, String value2) {
            addCriterion("com_art_id between", value1, value2, "comArtId");
            return (Criteria) this;
        }

        public Criteria andComArtIdNotBetween(String value1, String value2) {
            addCriterion("com_art_id not between", value1, value2, "comArtId");
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