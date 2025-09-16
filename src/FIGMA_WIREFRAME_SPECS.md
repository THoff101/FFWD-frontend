# FFWD Freight Forwarding Wireframes - Figma Design Specifications

## Overview
This document provides detailed specifications for creating wireframe designs in Figma for the FFWD freight forwarding automation software. The wireframes use a digital sketch style with hand-drawn elements for an approachable but professional look.

## Design System

### Colors
- **Background**: #F9FAFB (Light Gray)
- **White**: #FFFFFF 
- **Borders**: #9CA3AF (Gray-400) - Always use dashed/dotted strokes
- **Primary Blue**: #3B82F6
- **Success Green**: #10B981
- **Warning Orange**: #F59E0B
- **Error Red**: #EF4444
- **Purple**: #8B5CF6
- **Indigo**: #6366F1
- **Emerald**: #059669
- **Rose**: #F43F5E
- **Amber**: #D97706

### Typography
- **Font**: Inter or System Font
- **Heading Large**: 24px, Medium Weight
- **Heading Medium**: 20px, Medium Weight
- **Heading Small**: 16px, Medium Weight
- **Body**: 14px, Regular Weight
- **Caption**: 12px, Regular Weight
- **Button Text**: 14px, Medium Weight

### Border Style
- **All borders**: 2px dashed stroke
- **Input borders**: 1px dashed stroke
- **Section borders**: 2px dashed stroke
- **Corner radius**: 8px (consistent throughout)

---

## Screen 1: Job Creation Process

### Layout Structure
- **Canvas Size**: 1440px × 1024px
- **Sidebar**: 256px width, fixed left
- **Main Content**: Remaining width, scrollable

### Sidebar Navigation (256px width)
**Layer Structure**: `Sidebar Navigation`

1. **Brand Section** (Top)
   - FFWD logo placeholder: 80px × 32px rectangle, 2px dashed border
   - Subtitle: "Freight Platform" (Caption, Gray-500)

2. **Navigation Items** (Vertical stack, 8px gap)
   - Each item: 240px × 40px rectangle, 1px dashed border
   - Icon placeholder: 16px × 16px square, left-aligned
   - Text: 14px Medium, 8px margin from icon
   - Active item ("Jobs"): Background #F3F4F6

3. **Status Indicator** (Bottom)
   - Container: 240px × 80px, 2px dashed border, Blue-200 background
   - Icon: 24px × 24px square, centered
   - Text: "Job Creation" (Caption, Blue-600)

### Header Progress Bar
**Layer Structure**: `Progress Header`

- **Container**: Full width × 120px, White background, bottom border 2px dashed Gray-400
- **Progress Steps**: 4 circles, evenly spaced horizontally
  - **Circle**: 48px diameter, 2px dashed border
  - **Active**: Blue-500 border, Blue-100 background
  - **Completed**: Green-500 border, Green-100 background  
  - **Pending**: Gray-400 border, White background
- **Step Labels**: Below each circle
  - Step number: Caption, 8px margin-top
  - Step name: Body text, 4px margin-top
- **Connection Lines**: 1px dashed Gray-400, between circles

### Content Area Steps

#### Step 1: Basics
**Layer Structure**: `Step 1 - Basics`

**Main Container**: 2px dashed Blue-200 border, Blue-50 background, 24px padding

1. **Two-Column Grid** (Top section)
   - **Shipment Template** (Left column)
     - Label: "Shipment Template *" (Body, Medium)
     - Dropdown: 320px × 40px, 2px dashed border, White background
     - Placeholder text: "Select template..." (Caption, Gray-500)
     - Dropdown arrow: 16px × 16px square, right-aligned

   - **PO Number** (Right column)
     - Label: "Purchase Order (PO) Number *" (Body, Medium)
     - Input field: 320px × 40px, 2px dashed border, White background
     - Placeholder: "e.g., PO-2024-001234" (Caption, Gray-500)
     - Help text: "Required for tracking and reference" (Caption, Gray-500)

2. **Cargo Description** (Full width)
   - Label: "Cargo Description *"
   - Textarea: Full width × 80px, 2px dashed border, White background
   - Placeholder: "e.g., 500 cartons of electronics..."

3. **Four-Column Grid** (Measurements)
   - Each column: 25% width
   - Fields: Quantity, Weight (kg), Volume (cbm), Container Size
   - Each input: 160px × 40px, 2px dashed border

4. **Hazardous Goods Section**
   - Container: 2px dashed Orange-200 border, Orange-50 background, 16px padding
   - Toggle switch: 24px × 16px rounded rectangle
   - Label: "Hazardous Goods" (Body, Orange-700)
   - Conditional textarea: Full width × 60px when toggle active

#### Step 2: Parties & Locations
**Layer Structure**: `Step 2 - Parties`

**Color-coded sections with distinct background colors:**

1. **Shipper Section** (Top-left)
   - Container: 2px dashed Green-200 border, Green-50 background
   - Title: "Shipper *" (Body, Medium, Green-700)
   - 4 input fields: Company Name, Address, Contact Person, Email
   - Each field: 300px × 32px, 1px dashed border

2. **Consignee Section** (Top-right)
   - Container: 2px dashed Purple-200 border, Purple-50 background
   - Title: "Consignee *" (Body, Medium, Purple-700)
   - Same field structure as Shipper

3. **Notify Party Section** (Middle, full width)
   - Container: 2px dashed Blue-200 border, Blue-50 background
   - Title: "Notify Party (Optional)" (Body, Medium, Blue-700)
   - Two-column layout for Company and Contact fields

4. **Origin Section** (Bottom-left)
   - Container: 2px dashed Orange-200 border, Orange-50 background
   - Title: "Origin *" (Body, Medium, Orange-700)
   - Fields: Port/Airport, City, Country

5. **Destination Section** (Bottom-right)
   - Container: 2px dashed Teal-200 border, Teal-50 background
   - Title: "Destination *" (Body, Medium, Teal-700)
   - Same structure as Origin

#### Step 3: Dates & Documents
**Layer Structure**: `Step 3 - Documents`

1. **Shipping Dates Section**
   - Container: 2px dashed Indigo-200 border, Indigo-50 background
   - Title: "Shipping Dates" (Body, Medium, Indigo-700)
   - Two date inputs: ETD and ETA (side by side)

2. **Trade Terms Section**
   - Container: 2px dashed Emerald-200 border, Emerald-50 background
   - Title: "Trade Terms" (Body, Medium, Emerald-700)
   - Incoterms dropdown: Full width × 40px

3. **Required Documents Section**
   - Container: 2px dashed Amber-200 border, Amber-50 background
   - Title: "Required Documents (template-name)" (Body, Medium, Amber-700)
   - Two-column grid of document items
   - Each item: 320px × 48px rectangle, 1px dashed Amber-300 border
   - Left side: Checkbox + document name
   - Right side: "Generate" and "Upload" buttons (48px × 24px each)

4. **Custom Documents Section**
   - Container: 2px dashed Purple-200 border, Purple-50 background
   - Title with "Add Document" button (right-aligned)
   - Empty state: File icon + "No custom documents added yet"

5. **Special Instructions Section**
   - Container: 2px dashed Rose-200 border, Rose-50 background
   - Large textarea: Full width × 96px

#### Step 4: Review & Submit
**Layer Structure**: `Step 4 - Review`

1. **Summary Cards** (Four-column grid)
   - Each card: 160px × 80px, 2px dashed border, colored background
   - Template (Blue), PO Number (Green), Weight (Purple), Volume (Orange)
   - Large value text + small label text

2. **Progress Preview**
   - Container: 2px dashed Indigo-200 border, Indigo-50 background
   - Title: "Progress Preview"
   - 7 circles representing stages, all inactive (gray borders)
   - Stage names below circles (very small text)

3. **Detailed Review**
   - Container: 2px dashed Blue-200 border, Blue-50 background
   - Accordion sections for each step
   - Each section: Collapsible header + content area

4. **Upload Area**
   - Container: 2px dashed Amber-200 border, Amber-50 background
   - Large dropzone: Full width × 120px
   - Upload icon, title, and description text (centered)

5. **Navigation Buttons**
   - "Back to Documents": Left-aligned, 120px × 40px, 2px dashed Gray-400 border
   - "Create Job": Right-aligned, 120px × 40px, 2px dashed Blue-500 border, Blue-100 background

---

## Screen 2: Job Details Page

### Layout Structure  
Same sidebar as Job Creation Process

### Header Section
**Layer Structure**: `Job Details Header`

- **Container**: Full width × 140px, White background, 2px dashed bottom border
- **Left Section**:
  - Back button: 96px × 24px, 1px dashed border + arrow icon
  - Status badge: 80px × 20px, Blue-50 background, "In Progress"
  - Job ID: "Job FFWD-123456" (Heading Medium, Medium weight)
  - Subtitle: Template • PO • Created date (Body, Gray-500)
- **Right Section**:
  - "Edit Details" button: 96px × 32px, 1px dashed border
  - "Modify Progress" button: 120px × 32px, 1px dashed border

### Job Summary Cards
**Layer Structure**: `Job Summary`

Four cards in a row, each 200px × 80px:
1. Origin → Destination
2. Weight / Volume  
3. ETD / ETA
4. Current Stage
Each with 2px dashed border, White background

### Progress Timeline
**Layer Structure**: `Progress Timeline`

- **Container**: 2px dashed Blue-200 border, Blue-50 background, 32px padding
- **Title**: "Progress Timeline" (Heading Small, Medium, Blue-700)
- **Timeline**: 7 circles connected by dashed line
  - **Current stage**: Blue-500 border, Blue-100 background
  - **Completed**: Green-500 border, Green-100 background
  - **Pending**: Gray-400 border, White background
  - **External**: Gray-300 border, Gray-100 background
  - **Issues**: Red-500 border, Red-100 background
- **Stage names**: Below each circle, wrapped text in 64px width

### Current Stage Alert
**Layer Structure**: `Current Stage Alert`

- **Container**: 2px dashed Green-200 border, Green-50 background, 24px padding
- **Alert Icon**: 20px × 20px square, 2px dashed Green-500 border (top-left)
- **Content Section**:
  - Title: "Current Stage: [Stage Name]" (Body, Medium, Green-700)
  - Description text (Body, Green-600)
  - "Pending Tasks:" label
  - Task list: Each task in White background rectangle, 1px dashed Green-300 border
  - Action buttons: "Resume Progress" (Green) and "Pause Job" (Gray)

### Bottom Section - Two Columns

#### Document Status (Left Column)
**Layer Structure**: `Document Status`

- **Container**: 2px dashed Purple-200 border, Purple-50 background
- **Title**: "Document Status" (Body, Medium, Purple-700)
- **Accordion structure**:
  - "Required Documents" section (collapsible)
  - List of documents with status badges
  - Each document: White background, 1px dashed border, status indicator

#### Activity History (Right Column)  
**Layer Structure**: `Activity History`

- **Container**: 2px dashed Orange-200 border, Orange-50 background
- **Title**: "Activity History" (Body, Medium, Orange-700)
- **History items**: Vertical list, each item:
  - Timeline dot: 8px circle, 1px dashed Orange-400 border
  - Event name and details (Body text)
  - Timestamp (Caption, Gray-500)
  - "by [User]" attribution (Caption, Gray-500)

---

## Figma Layer Organization

### Main Frames
1. **Job Creation Process** (1440 × 1024px)
2. **Job Details Page** (1440 × 1024px)

### Component Organization
Create the following component sets:

#### Navigation Components
- `Sidebar Navigation`
- `Progress Indicators` 
- `Step Headers`

#### Form Components  
- `Input Field` (with label, placeholder, help text variants)
- `Dropdown Field`
- `Textarea Field`
- `Checkbox with Label`
- `Toggle Switch`

#### Layout Components
- `Section Container` (with color variants for each step)
- `Card Container`
- `Button Primary`
- `Button Secondary`
- `Status Badge`

#### Content Components
- `Document List Item`
- `Task List Item`
- `History Log Item`
- `Summary Card`
- `Progress Circle` (with status variants)

### Auto Layout Usage
- Use Auto Layout for all container components
- Set consistent 16px-24px padding on section containers
- Use 8px-16px gaps between related elements
- Use 24px-32px gaps between major sections

### Constraints and Responsive Behavior
- Sidebar: Fixed 256px width, full height
- Main content: Fill remaining width, scrollable
- Form sections: Full width with max-width constraints
- Cards: Fixed aspect ratios where appropriate

This specification should give you everything needed to recreate these wireframes in Figma with proper component structure, consistent styling, and organized layers for easy editing and iteration.