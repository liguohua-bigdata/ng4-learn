#!/bin/bash
#########################################
#author: liguohua
#email : liguohua@cloud-star.com.cn
#date  : 2017.08.22
#########################################
#1.定义相关变量
_private_docker_registry_uri=10.100.134.3:5000
_project_name=telecomapistore-frontend-services
_module_names=(
               telecomapistore-portal-service
               marketing-portal-service
              )
_module_container_ports=(
                          80
                          80
                        )
_module_host_ports=(
                    31111
                    31112
                   )
###################################################
###################################################
###################################################
newLineSlash="################################################################################################################"
echo $newLineSlash
echo "PRESS(a or A)SWITCH AUTO MODE:automatic execute all commands "
read auto
flag='a'
function autoAction() {
    if [ "$auto" != "a" -a "$auto" != "A" ] ; then
        echo $newLineSlash
        echo $1
        read flag
    fi
}

#2.对每个module进行相关操作
for ((i=0; i<${#_module_names[@]}; i++)); do
    _module_name=${_module_names[i]}
    _docker_container_name=$_project_name-$_module_name

    autoAction "PRESS(s or S) TO SKIP:docker rm $_docker_container_name"
    msg="=======1.skip docker rm: $_docker_container_name======="
    if [ "$flag" = "s" -o "$flag" = "S" ] ; then
        echo $msg
    else
        echo $msg
        docker kill $_docker_container_name
        docker rm  $_docker_container_name
    fi
done
echo $newLineSlash
docker ps

#2.对每个module进行相关操作
for ((i=0; i<${#_module_names[@]}; i++)); do
    _module_name=${_module_names[i]}
    _docker_image_name=$_project_name/$_module_name
    _docker_container_name=$_project_name-$_module_name
    _docker_image_full_name=$_private_docker_registry_uri/$_docker_image_name

    autoAction "PRESS(s or S) TO SKIP DEPLOY: $_docker_image_full_name "
    msg="=======2.skip docker run: $_docker_image_full_name======="
    if [ "$flag" = "s" -o "$flag" = "S" ] ; then
        echo $msg
    else
        echo $msg
        #3.下载镜像&运行容器
        docker pull $_docker_image_full_name
        docker run -d -p ${_module_host_ports[i]}:${_module_container_ports[i]} --name $_docker_container_name $_docker_image_full_name
    fi
done
echo $newLineSlash
docker ps
echo $newLineSlash
echo "=======project deploy $_project_name finished!======="