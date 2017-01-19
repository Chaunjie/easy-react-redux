关于使用browserHistory的问题需要配置服务端

apache服务器只需要在打包目录下面添加.htaccess文件并且把下列代码复制其中
    <IfModule mod_rewrite.c>
    RewriteEngine on
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^(.*)$ #/$1 [QSA,PT,L]
    </IfModule>
    
如果是nginx服务器参考如下链接进行配置
    https://github.com/ReactTraining/react-router/blob/v2.0.0-rc5/docs/guides/basics/Histories.md#configuring-your-server
