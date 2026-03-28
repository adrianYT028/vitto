# Vitto API — Testing Guide

## Base URL
```
http://localhost:5000
```

## 1. Health Check
```bash
curl http://localhost:5000/api/health
```

**Expected Response:**
```json
{
  "success": true,
  "service": "vitto-api",
  "timestamp": "2026-03-28T12:00:00.000Z"
}
```

---

## 2. Send OTP
```bash
curl -X POST http://localhost:5000/api/auth/send-otp \
  -H "Content-Type: application/json" \
  -d '{"phone": "+919876543210"}'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "OTP sent successfully",
  "expiresIn": 600
}
```

> **Note:** The OTP is logged to the server console (mock delivery). Check the terminal running the backend.

---

## 3. Verify OTP
```bash
curl -X POST http://localhost:5000/api/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d '{"phone": "+919876543210", "otp": "PASTE_OTP_FROM_CONSOLE"}'
```

**Expected Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": "7d"
}
```

> Save the `token` value — you need it for the next requests.

---

## 4. Create Lead (Requires Auth)
```bash
curl -X POST http://localhost:5000/api/leads \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer PASTE_JWT_TOKEN_HERE" \
  -d '{
    "email": "priya@abcfinance.com",
    "phone": "+919876543210",
    "institution_name": "ABC Finance Ltd",
    "institution_type": "nbfc",
    "city": "Mumbai",
    "loan_book_size": "500-2000cr"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "data": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "email": "priya@abcfinance.com",
    "phone": "+919876543210",
    "institution_name": "ABC Finance Ltd",
    "institution_type": "nbfc",
    "city": "Mumbai",
    "loan_book_size": "500-2000cr",
    "status": "new",
    "created_at": "2026-03-28T12:00:00.000Z"
  }
}
```

---

## 5. Get Lead by ID (Requires Auth)
```bash
curl http://localhost:5000/api/leads/PASTE_LEAD_ID_HERE \
  -H "Authorization: Bearer PASTE_JWT_TOKEN_HERE"
```

**Expected Response:**
```json
{
  "success": true,
  "data": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "email": "priya@abcfinance.com",
    "phone": "+919876543210",
    "institution_name": "ABC Finance Ltd",
    "institution_type": "nbfc",
    "city": "Mumbai",
    "loan_book_size": "500-2000cr",
    "status": "new",
    "created_at": "2026-03-28T12:00:00.000Z"
  }
}
```

---

## Error Responses

### 401 Unauthorized (Missing or Invalid Token)
```json
{
  "success": false,
  "error": "Authentication required. Provide a Bearer token."
}
```

### 400 Validation Error
```json
{
  "success": false,
  "error": "Validation failed",
  "details": [
    { "field": "email", "message": "email must be a valid email" }
  ]
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": "Lead not found."
}
```

### 429 Too Many OTP Attempts
```json
{
  "success": false,
  "error": "Maximum verification attempts exceeded. Request a new OTP."
}
```
