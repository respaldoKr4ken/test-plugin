package com.kr4ken.test;

import com.getcapacitor.Logger;

public class Test {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
