package com.mb.entity;

import java.util.Date;

public class LeaveMsg {
    private String lmId;

    private String lmContent;

    private String lmEmail;

    private String lmName;

    private Date lmDate;

    private String lmFatherid;

    public String getLmId() {
        return lmId;
    }

    public void setLmId(String lmId) {
        this.lmId = lmId == null ? null : lmId.trim();
    }

    public String getLmContent() {
        return lmContent;
    }

    public void setLmContent(String lmContent) {
        this.lmContent = lmContent == null ? null : lmContent.trim();
    }

    public String getLmEmail() {
        return lmEmail;
    }

    public void setLmEmail(String lmEmail) {
        this.lmEmail = lmEmail == null ? null : lmEmail.trim();
    }

    public String getLmName() {
        return lmName;
    }

    public void setLmName(String lmName) {
        this.lmName = lmName == null ? null : lmName.trim();
    }

    public Date getLmDate() {
        return lmDate;
    }

    public void setLmDate(Date lmDate) {
        this.lmDate = lmDate;
    }

    public String getLmFatherid() {
        return lmFatherid;
    }

    public void setLmFatherid(String lmFatherid) {
        this.lmFatherid = lmFatherid == null ? null : lmFatherid.trim();
    }
}