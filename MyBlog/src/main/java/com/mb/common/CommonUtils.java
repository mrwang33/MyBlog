package com.mb.common;

import java.util.UUID;

import com.mb.entity.Article;

public class CommonUtils {

	
    /** 
     * 获得一个UUID 
     * @return String UUID 
     */ 
    public static String getUUID(){ 
        String s = UUID.randomUUID().toString(); 
        //去掉“-”符号 
        return s.substring(0,8)+s.substring(9,13)+s.substring(14,18)+s.substring(19,23)+s.substring(24); 
    } 
    
    //合成 page类
    public static Page<Article> createPage(Page<Article> page,Integer pageIndex,String keyWords,String classifyId) {
    	if (pageIndex!=null&&pageIndex>0) {
			page.setPageIndex(pageIndex);
		}
    	if (keyWords!=null&&!"".equals(keyWords)) {
			page.setKeyWords(keyWords);
		}
    	if (classifyId!=null&&"".equals(classifyId)) {
			page.setClassifyId(classifyId);
		}
    	return page;
    }
}
