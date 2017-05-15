package com.mb.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class LeaveMsgExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public LeaveMsgExample() {
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

        public Criteria andLmIdIsNull() {
            addCriterion("lm_id is null");
            return (Criteria) this;
        }

        public Criteria andLmIdIsNotNull() {
            addCriterion("lm_id is not null");
            return (Criteria) this;
        }

        public Criteria andLmIdEqualTo(String value) {
            addCriterion("lm_id =", value, "lmId");
            return (Criteria) this;
        }

        public Criteria andLmIdNotEqualTo(String value) {
            addCriterion("lm_id <>", value, "lmId");
            return (Criteria) this;
        }

        public Criteria andLmIdGreaterThan(String value) {
            addCriterion("lm_id >", value, "lmId");
            return (Criteria) this;
        }

        public Criteria andLmIdGreaterThanOrEqualTo(String value) {
            addCriterion("lm_id >=", value, "lmId");
            return (Criteria) this;
        }

        public Criteria andLmIdLessThan(String value) {
            addCriterion("lm_id <", value, "lmId");
            return (Criteria) this;
        }

        public Criteria andLmIdLessThanOrEqualTo(String value) {
            addCriterion("lm_id <=", value, "lmId");
            return (Criteria) this;
        }

        public Criteria andLmIdLike(String value) {
            addCriterion("lm_id like", value, "lmId");
            return (Criteria) this;
        }

        public Criteria andLmIdNotLike(String value) {
            addCriterion("lm_id not like", value, "lmId");
            return (Criteria) this;
        }

        public Criteria andLmIdIn(List<String> values) {
            addCriterion("lm_id in", values, "lmId");
            return (Criteria) this;
        }

        public Criteria andLmIdNotIn(List<String> values) {
            addCriterion("lm_id not in", values, "lmId");
            return (Criteria) this;
        }

        public Criteria andLmIdBetween(String value1, String value2) {
            addCriterion("lm_id between", value1, value2, "lmId");
            return (Criteria) this;
        }

        public Criteria andLmIdNotBetween(String value1, String value2) {
            addCriterion("lm_id not between", value1, value2, "lmId");
            return (Criteria) this;
        }

        public Criteria andLmContentIsNull() {
            addCriterion("lm_content is null");
            return (Criteria) this;
        }

        public Criteria andLmContentIsNotNull() {
            addCriterion("lm_content is not null");
            return (Criteria) this;
        }

        public Criteria andLmContentEqualTo(String value) {
            addCriterion("lm_content =", value, "lmContent");
            return (Criteria) this;
        }

        public Criteria andLmContentNotEqualTo(String value) {
            addCriterion("lm_content <>", value, "lmContent");
            return (Criteria) this;
        }

        public Criteria andLmContentGreaterThan(String value) {
            addCriterion("lm_content >", value, "lmContent");
            return (Criteria) this;
        }

        public Criteria andLmContentGreaterThanOrEqualTo(String value) {
            addCriterion("lm_content >=", value, "lmContent");
            return (Criteria) this;
        }

        public Criteria andLmContentLessThan(String value) {
            addCriterion("lm_content <", value, "lmContent");
            return (Criteria) this;
        }

        public Criteria andLmContentLessThanOrEqualTo(String value) {
            addCriterion("lm_content <=", value, "lmContent");
            return (Criteria) this;
        }

        public Criteria andLmContentLike(String value) {
            addCriterion("lm_content like", value, "lmContent");
            return (Criteria) this;
        }

        public Criteria andLmContentNotLike(String value) {
            addCriterion("lm_content not like", value, "lmContent");
            return (Criteria) this;
        }

        public Criteria andLmContentIn(List<String> values) {
            addCriterion("lm_content in", values, "lmContent");
            return (Criteria) this;
        }

        public Criteria andLmContentNotIn(List<String> values) {
            addCriterion("lm_content not in", values, "lmContent");
            return (Criteria) this;
        }

        public Criteria andLmContentBetween(String value1, String value2) {
            addCriterion("lm_content between", value1, value2, "lmContent");
            return (Criteria) this;
        }

        public Criteria andLmContentNotBetween(String value1, String value2) {
            addCriterion("lm_content not between", value1, value2, "lmContent");
            return (Criteria) this;
        }

        public Criteria andLmEmailIsNull() {
            addCriterion("lm_email is null");
            return (Criteria) this;
        }

        public Criteria andLmEmailIsNotNull() {
            addCriterion("lm_email is not null");
            return (Criteria) this;
        }

        public Criteria andLmEmailEqualTo(String value) {
            addCriterion("lm_email =", value, "lmEmail");
            return (Criteria) this;
        }

        public Criteria andLmEmailNotEqualTo(String value) {
            addCriterion("lm_email <>", value, "lmEmail");
            return (Criteria) this;
        }

        public Criteria andLmEmailGreaterThan(String value) {
            addCriterion("lm_email >", value, "lmEmail");
            return (Criteria) this;
        }

        public Criteria andLmEmailGreaterThanOrEqualTo(String value) {
            addCriterion("lm_email >=", value, "lmEmail");
            return (Criteria) this;
        }

        public Criteria andLmEmailLessThan(String value) {
            addCriterion("lm_email <", value, "lmEmail");
            return (Criteria) this;
        }

        public Criteria andLmEmailLessThanOrEqualTo(String value) {
            addCriterion("lm_email <=", value, "lmEmail");
            return (Criteria) this;
        }

        public Criteria andLmEmailLike(String value) {
            addCriterion("lm_email like", value, "lmEmail");
            return (Criteria) this;
        }

        public Criteria andLmEmailNotLike(String value) {
            addCriterion("lm_email not like", value, "lmEmail");
            return (Criteria) this;
        }

        public Criteria andLmEmailIn(List<String> values) {
            addCriterion("lm_email in", values, "lmEmail");
            return (Criteria) this;
        }

        public Criteria andLmEmailNotIn(List<String> values) {
            addCriterion("lm_email not in", values, "lmEmail");
            return (Criteria) this;
        }

        public Criteria andLmEmailBetween(String value1, String value2) {
            addCriterion("lm_email between", value1, value2, "lmEmail");
            return (Criteria) this;
        }

        public Criteria andLmEmailNotBetween(String value1, String value2) {
            addCriterion("lm_email not between", value1, value2, "lmEmail");
            return (Criteria) this;
        }

        public Criteria andLmNameIsNull() {
            addCriterion("lm_name is null");
            return (Criteria) this;
        }

        public Criteria andLmNameIsNotNull() {
            addCriterion("lm_name is not null");
            return (Criteria) this;
        }

        public Criteria andLmNameEqualTo(String value) {
            addCriterion("lm_name =", value, "lmName");
            return (Criteria) this;
        }

        public Criteria andLmNameNotEqualTo(String value) {
            addCriterion("lm_name <>", value, "lmName");
            return (Criteria) this;
        }

        public Criteria andLmNameGreaterThan(String value) {
            addCriterion("lm_name >", value, "lmName");
            return (Criteria) this;
        }

        public Criteria andLmNameGreaterThanOrEqualTo(String value) {
            addCriterion("lm_name >=", value, "lmName");
            return (Criteria) this;
        }

        public Criteria andLmNameLessThan(String value) {
            addCriterion("lm_name <", value, "lmName");
            return (Criteria) this;
        }

        public Criteria andLmNameLessThanOrEqualTo(String value) {
            addCriterion("lm_name <=", value, "lmName");
            return (Criteria) this;
        }

        public Criteria andLmNameLike(String value) {
            addCriterion("lm_name like", value, "lmName");
            return (Criteria) this;
        }

        public Criteria andLmNameNotLike(String value) {
            addCriterion("lm_name not like", value, "lmName");
            return (Criteria) this;
        }

        public Criteria andLmNameIn(List<String> values) {
            addCriterion("lm_name in", values, "lmName");
            return (Criteria) this;
        }

        public Criteria andLmNameNotIn(List<String> values) {
            addCriterion("lm_name not in", values, "lmName");
            return (Criteria) this;
        }

        public Criteria andLmNameBetween(String value1, String value2) {
            addCriterion("lm_name between", value1, value2, "lmName");
            return (Criteria) this;
        }

        public Criteria andLmNameNotBetween(String value1, String value2) {
            addCriterion("lm_name not between", value1, value2, "lmName");
            return (Criteria) this;
        }

        public Criteria andLmDateIsNull() {
            addCriterion("lm_date is null");
            return (Criteria) this;
        }

        public Criteria andLmDateIsNotNull() {
            addCriterion("lm_date is not null");
            return (Criteria) this;
        }

        public Criteria andLmDateEqualTo(Date value) {
            addCriterion("lm_date =", value, "lmDate");
            return (Criteria) this;
        }

        public Criteria andLmDateNotEqualTo(Date value) {
            addCriterion("lm_date <>", value, "lmDate");
            return (Criteria) this;
        }

        public Criteria andLmDateGreaterThan(Date value) {
            addCriterion("lm_date >", value, "lmDate");
            return (Criteria) this;
        }

        public Criteria andLmDateGreaterThanOrEqualTo(Date value) {
            addCriterion("lm_date >=", value, "lmDate");
            return (Criteria) this;
        }

        public Criteria andLmDateLessThan(Date value) {
            addCriterion("lm_date <", value, "lmDate");
            return (Criteria) this;
        }

        public Criteria andLmDateLessThanOrEqualTo(Date value) {
            addCriterion("lm_date <=", value, "lmDate");
            return (Criteria) this;
        }

        public Criteria andLmDateIn(List<Date> values) {
            addCriterion("lm_date in", values, "lmDate");
            return (Criteria) this;
        }

        public Criteria andLmDateNotIn(List<Date> values) {
            addCriterion("lm_date not in", values, "lmDate");
            return (Criteria) this;
        }

        public Criteria andLmDateBetween(Date value1, Date value2) {
            addCriterion("lm_date between", value1, value2, "lmDate");
            return (Criteria) this;
        }

        public Criteria andLmDateNotBetween(Date value1, Date value2) {
            addCriterion("lm_date not between", value1, value2, "lmDate");
            return (Criteria) this;
        }

        public Criteria andLmFatheridIsNull() {
            addCriterion("lm_fatherId is null");
            return (Criteria) this;
        }

        public Criteria andLmFatheridIsNotNull() {
            addCriterion("lm_fatherId is not null");
            return (Criteria) this;
        }

        public Criteria andLmFatheridEqualTo(String value) {
            addCriterion("lm_fatherId =", value, "lmFatherid");
            return (Criteria) this;
        }

        public Criteria andLmFatheridNotEqualTo(String value) {
            addCriterion("lm_fatherId <>", value, "lmFatherid");
            return (Criteria) this;
        }

        public Criteria andLmFatheridGreaterThan(String value) {
            addCriterion("lm_fatherId >", value, "lmFatherid");
            return (Criteria) this;
        }

        public Criteria andLmFatheridGreaterThanOrEqualTo(String value) {
            addCriterion("lm_fatherId >=", value, "lmFatherid");
            return (Criteria) this;
        }

        public Criteria andLmFatheridLessThan(String value) {
            addCriterion("lm_fatherId <", value, "lmFatherid");
            return (Criteria) this;
        }

        public Criteria andLmFatheridLessThanOrEqualTo(String value) {
            addCriterion("lm_fatherId <=", value, "lmFatherid");
            return (Criteria) this;
        }

        public Criteria andLmFatheridLike(String value) {
            addCriterion("lm_fatherId like", value, "lmFatherid");
            return (Criteria) this;
        }

        public Criteria andLmFatheridNotLike(String value) {
            addCriterion("lm_fatherId not like", value, "lmFatherid");
            return (Criteria) this;
        }

        public Criteria andLmFatheridIn(List<String> values) {
            addCriterion("lm_fatherId in", values, "lmFatherid");
            return (Criteria) this;
        }

        public Criteria andLmFatheridNotIn(List<String> values) {
            addCriterion("lm_fatherId not in", values, "lmFatherid");
            return (Criteria) this;
        }

        public Criteria andLmFatheridBetween(String value1, String value2) {
            addCriterion("lm_fatherId between", value1, value2, "lmFatherid");
            return (Criteria) this;
        }

        public Criteria andLmFatheridNotBetween(String value1, String value2) {
            addCriterion("lm_fatherId not between", value1, value2, "lmFatherid");
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