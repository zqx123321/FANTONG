﻿<%@ WebHandler Language="C#" Class="roomDelete" %>

using System;
using System.Web;

public class roomDelete : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        string ID = Convert.ToString(context.Request.Form["ID"]);
        string sql = "delete from room where id =" + ID.ToString() + ";";
        int res = SQLHelper.SqlExecute(sql);
        string final = "";
        if (res > 0)
        {
            final = "{\"res\":1}";

        }
        else
        {
            final = "{\"res\":0}";
        }
        context.Response.Write(final);
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}