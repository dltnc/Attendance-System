# Requirements

Models - Schemas

User:
    Name
    Email
    Password
    Roles
    AccountStatus

Profile:
    First Name
    Last Name
    Phone No
    Profile Picture
    UserId

UserAttendance:
    UserId
    CreateAt: DateTime

AdminAttendance:
    CreatedAt: DateTime
    Status
    TimeLimit

Endpoints - Routes

Student Endpoints:
    POST /auth/login [publicRoute]
    Post /auth/register [publicRoute]
    PATCH /profiles [privateRoute]
    PATCH /profiles/avatar [privateRoute]
    Put /auth/change-password [privateRoute]
    GET /timesheet [private]
    GET /attendance [private]
    GET /attendanceStatus [private]

Admin Endpoints:
    GET /users [private]
    POST /users [private]
    PATCH /users/userId [private]
    DELETE /users/userId [private]
    GET /users/userId [private]
    GET /profiles [private]
    POST /profiles [private]
    PATCH /profiles/profileId [private]
    DELETE /profiles/profileId [private]
    GET /profiles/profileId [private]
    GET /timesheet/userId [private]
    GET /attendance/enable [private]
    GET /attendance/disabled/:attendanceId [private]
    GET /timesheet/status [private]

Authentication Routes

    /register
    /login
    /change-password

Middlewares

    /Authenticate
    /Authorize

Timesheet & Attendance

    GET /timesheet
    GET /attendance
    GET /attendanceStatus

User CRUD

    Get User
    Get User By Id
    Create User
    Update User
    Delete User

Profile CRUD

    Get Profile
    Get Prifle By Id
    Create Profile
    Update Profile
    Delete Profile
    GET /timesheet/userId

Admin Control Over Attendance

    POST /attendance/enable 
    GET /attendance/disabled/:attendanceId

Generate Status

    GET /timesheet/status

Registration Process (Pseudo Code):

    Start
    name = input()
    email = input() 
    password = input()

    if name && email && password is invalid:
        return 404 error

    user = find user with email
    if user found:
        return 404 error
    
    hash = hash password
    user = save new user with name, email, hash
    return 202
    End

Login Process:

    Start
    email = input()
    password = input()

    user = find user with email
    if user not found:
        return 400 error

    if password not equal to user hash:
        return 400 error

    token = generate token using user
    return token
    End

Change/reset Password:

    Start
    new-password = input()
    old-password = input()
    (TODO)

    if old-password not equal to user hash password:
        return 400 error
    
    else hash = hash new-password
        save hash
        return 200
    End
