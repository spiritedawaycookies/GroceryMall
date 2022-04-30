package com.lcy.campusmall.utils;

import org.apache.commons.codec.digest.DigestUtils;


public class MD5Utils {
    public static String md5Digest(String source, Integer salt, int round) {

        if (round > 0) {
            char[] ca = source.toCharArray();
            //混淆源数据
            for (int i = 0; i < ca.length; i++) {
                ca[i] = (char) (ca[i] + salt);
            }

           String target = new String(ca);
            return md5Digest(DigestUtils.md5Hex(target), salt, round - 1);
        }else return source;

    }

    public static void main(String[] args) {
        System.out.println(md5Digest("12345678", 4336, 2));
    }
}
