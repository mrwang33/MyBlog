package com.mb.entity;

/**
 * @author 王欢
 * 关于本站
 */
public class About {
	//主键
    private Integer id;
    //简述
    private String summary;
    //所使用的技术
    private String skill;
    //人生信条
    private String creed;

    public About() {
	}

	public About(Integer id, String summary, String skill, String creed) {
		super();
		this.id = id;
		this.summary = summary;
		this.skill = skill;
		this.creed = creed;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary == null ? null : summary.trim();
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill == null ? null : skill.trim();
    }

    public String getCreed() {
        return creed;
    }

    public void setCreed(String creed) {
        this.creed = creed == null ? null : creed.trim();
    }
}