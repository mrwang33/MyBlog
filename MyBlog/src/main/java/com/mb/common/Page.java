package com.mb.common;

import java.util.List;

/**
 * @author 王欢
 * 分页类
 * @param <T> 实体类
 */
public class Page<T> {
	private List<T> pageList;
	//每页多少条
	private int pageSize;
	//共多少条
	private int recordCount;
	//共多少页
	private int pageCount;
	//搜索关键字
	private String keyWords;
	//博文所属分类
	private String classifyId;
	//当前页
	private int pageIndex;
	//当前记录开始数
	private int start;
	
	public Page() {
	}


	/**
	 * @param pageSize 每页多少条
	 * @param recordCount 共多少条
	 * @param keyWords 搜索关键字
	 * @param classifyId 博文所属分类
	 * @param pageIndex 当前页
	 */
	public Page(int pageSize, int recordCount, String keyWords, String classifyId,
			int pageIndex) {
		this.pageSize = pageSize;
		this.recordCount = recordCount;
		this.pageCount = recordCount%pageSize==0 ? recordCount/pageSize : recordCount/pageSize+1;
		this.keyWords = keyWords;
		this.classifyId = classifyId;
		this.pageIndex = pageIndex;
		this.start = (pageIndex-1)*pageSize;
	}


	public List<T> getPageList() {
		return pageList;
	}

	public void setPageList(List<T> pageList) {
		this.pageList = pageList;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getRecordCount() {
		return recordCount;
	}

	public void setRecordCount(int recordCount) {
		this.recordCount = recordCount;
	}

	public int getPageCount() {
		return pageCount;
	}

	public void setPageCount(int pageCount) {
		this.pageCount = pageCount;
	}

	public String getKeyWords() {
		return keyWords;
	}

	public void setKeyWords(String keyWords) {
		this.keyWords = keyWords;
	}

	public String getClassifyId() {
		return classifyId;
	}

	public void setClassifyId(String classifyId) {
		this.classifyId = classifyId;
	}


	public int getPageIndex() {
		return pageIndex;
	}


	public void setPageIndex(int pageIndex) {
		this.pageIndex = pageIndex;
		this.start = (pageIndex-1)*pageSize;
	}


	public int getStart() {
		return start;
	}


	public void setStart(int start) {
		this.start = start;
	}
	
	
}
