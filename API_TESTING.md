# Vitto API — Testing Guide

## Base URLs
```
Production:  https://vitto-api-brwp.onrender.com
Local:       http://localhost:5000
```

## Postman Collection
Import `Vitto_API.postman_collection.json` (included in this repo) into Postman for a ready-to-use test suite with auto-token management.

---

## 1. Health Check
```bash
curl https://vitto-api-brwp.onrender.com/api/health
```

**Expected Response (200):**
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
curl -X POST https://vitto-api-brwp.onrender.com/api/auth/send-otp \
  -H "Content-Type: application/json" \
  -d '{"phone": "+919876543210"}'
```

**Expected Response (200):**
```json
{
  "success": true,
  "message": "OTP sent successfully",
  "expiresIn": 600
}
```

> **Note:** The OTP is logged to the server console (mock delivery). On Render, go to your web service → **Logs** tab to find the OTP. You will see a line like: `[OTP] Phone: +919876543210 → OTP: 543892`

---

## 3. Verify OTP
```bash
curl -X POST https://vitto-api-brwp.onrender.com/api/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d '{"phone": "+919876543210", "otp": "PASTE_OTP_FROM_LOGS"}'
```

**Expected Response (200):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "expiresIn": "7d"
}
```

> Save the `token` value — you need it for the authenticated requests below.

**Error — Invalid OTP (400):**
```json
{
  "success": false,
  "error": "Invalid OTP. 2 attempts remaining."
}
```

**Error — Max attempts exceeded (429):**
```json
{
  "success": false,
  "error": "Maximum verification attempts exceeded. Request a new OTP."
}
```

---

## 4. Create Lead (Requires Auth)
```bash
curl -X POST https://vitto-api-brwp.onrender.com/api/leads \
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

**Expected Response (201):**
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

**Validation Error (400):**
```json
{
  "success": false,
  "error": "Validation failed",
  "details": [
    { "field": "email", "message": "\"email\" must be a valid email" },
    { "field": "institution_type", "message": "\"institution_type\" must be one of [bank, nbfc, mfi]" }
  ]
}
```

**Unauthorized (401):**
```json
{
  "success": false,
  "error": "Authentication required. Provide a Bearer token."
}
```

---

## 5. Get Lead by ID (Requires Auth)
```bash
curl https://vitto-api-brwp.onrender.com/api/leads/PASTE_LEAD_ID_HERE \
  -H "Authorization: Bearer PASTE_JWT_TOKEN_HERE"
```

**Expected Response (200):**
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

**Not Found (404):**
```json
{
  "success": false,
  "error": "Lead not found."
}
```

---

## Testing Flow (Step-by-Step)

1. Run **Health Check** to verify the server is live
2. Run **Send OTP** with a phone number
3. Check **Render Logs** for the OTP code
4. Run **Verify OTP** with the code → save the returned JWT token
5. Run **Create Lead** with the JWT token → save the returned lead ID
6. Run **Get Lead by ID** with the JWT token and lead ID
