import request from '@/util/request'

//查询课程资料
export function findCourseResource(courseId) {
    return request({
        url: '/resource/course/'+courseId,
        method: 'get'
    })
}