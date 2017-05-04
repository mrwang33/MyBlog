package com.mb.service;

import java.io.Serializable;
import java.util.List;

public interface BaseService<T> {
	//查找所有
	public List<T> getAll();
	//根据id查找实体类
	public T getById(Serializable id);
	//保存
	public int insert(T t) throws Exception;
	//更新
	public int update(T t) throws Exception;
	//根据id删除
	public int delete(Serializable id) throws Exception;
	//根据数组删除
	public int deleteList(Serializable[] id) throws Exception;
}
