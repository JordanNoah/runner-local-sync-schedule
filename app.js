const axios = require('axios');
require('dotenv').config();

const config = {
    uri: process.env.API_URL || "http://localhost:3000",
}

let headers = {
    "Content-Type":"application/x-www-form-urlencoded"
}

let data = {
    "moodlewsrestformat":"json",
    "wstoken":process.env.API_TOKEN
}

async function local_sync_schedule_course_data(page) {
    let body = { ...data }
    body.wsfunction = "local_sync_schedule_course_data"
    body.page = page
    let response = await axios.post(config.uri,body,{headers:headers})
    console.log(response.data);
}
async function local_sync_schedule_course_counter() {
    let body = { ...data }
    body.wsfunction = "local_sync_schedule_course_counter"
    let response = await axios.post(config.uri,body,{headers:headers})
    return response.data
}
async function local_sync_schedule_group_counter() {
    let response = await axios.post(config.uri)
}
async function local_sync_schedule_group_data() {
    let response = await axios.post(config.uri)
}
async function local_sync_schedule_grouping_counter() {
    let response = await axios.post(config.uri)
}
async function local_sync_schedule_grouping_data() {
    let response = await axios.post(config.uri)
}
async function local_sync_schedule_course_section_counter() {
    let response = await axios.post(config.uri)
}
async function local_sync_schedule_course_section_data() {
    let response = await axios.post(config.uri)
}
async function local_sync_schedule_course_module_counter() {
    let response = await axios.post(config.uri)
}
async function local_sync_schedule_course_module_data() {
    let response = await axios.post(config.uri)
}

async function main() {
    const course_counter = await local_sync_schedule_course_counter()
    
    for (let i = 0; i < course_counter.totalCourses; i++) {
        const course_data = await local_sync_schedule_course_data(i)
        console.log(course_data);
    }
    //await local_sync_schedule_group_counter()
    //await local_sync_schedule_group_data()
    //await local_sync_schedule_grouping_counter()
    //await local_sync_schedule_grouping_data()
    //await local_sync_schedule_course_section_counter()
    //await local_sync_schedule_course_section_data()
    //await local_sync_schedule_course_module_counter()
    //await local_sync_schedule_course_module_data()
}

( async ()=>{
    await main()
})()