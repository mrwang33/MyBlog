package com.mb.service;

import java.io.Serializable;
import java.util.List;

public interface BaseService<T> {
	//查找所有
	public List<T> getAll();
	//根据id查找实体类
	public T getById(Serializable id);
	//保存
	public int insert(T t);
	//更新
	public int update(T t);
	//根据id删除
	public void delete(Serializable id);
	//根据数组删除
	public void deleteList(Serializable[] id);
}
