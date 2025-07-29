{
  "id": "9f2bebc5-8212-4afc-a9ee-246e5fbae617",
  "version": "2.0",
  "name": "New",
  "url": "https://www.nykaa.com",
  "tests": [{
    "id": "e20d0eb1-a88c-4501-8bfd-01e40adb5295",
    "name": "1",
    "commands": [{
      "id": "ce03766f-3292-42db-865d-36a222debf0b",
      "comment": "",
      "command": "open",
      "target": "/",
      "targets": [],
      "value": ""
    }, {
      "id": "779d2efe-52c0-4c32-92a9-ae0624e3e91b",
      "comment": "",
      "command": "setWindowSize",
      "target": "1054x800",
      "targets": [],
      "value": ""
    }, {
      "id": "69be2b75-f267-49b0-ab4a-322f42bf6526",
      "comment": "",
      "command": "click",
      "target": "name=search-suggestions-nykaa",
      "targets": [
        ["name=search-suggestions-nykaa", "name"],
        ["css=.css-1upamjb", "css:finder"],
        ["xpath=//input[@name='search-suggestions-nykaa']", "xpath:attributes"],
        ["xpath=//div[@id='headerMenu']/div[2]/div/div/form/input", "xpath:idRelative"],
        ["xpath=//form/input", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "045656b6-b0b4-4076-9389-f28595a2d0f4",
      "comment": "",
      "command": "click",
      "target": "css=#\\36 8788c521aad9167c029ca49 .outline-wrapper",
      "targets": [
        ["css=#\\36 8788c521aad9167c029ca49 .outline-wrapper", "css:finder"],
        ["xpath=//div[@id='68788c521aad9167c029ca49']/div/div/div[3]", "xpath:idRelative"],
        ["xpath=//div/div/div/div/div/div/div/div[3]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "328a5f6e-48ee-4639-8bab-8f29f7c79972",
      "comment": "",
      "command": "click",
      "target": "name=search-suggestions-nykaa",
      "targets": [
        ["name=search-suggestions-nykaa", "name"],
        ["css=.css-1upamjb", "css:finder"],
        ["xpath=//input[@name='search-suggestions-nykaa']", "xpath:attributes"],
        ["xpath=//div[@id='headerMenu']/div[2]/div/div/form/input", "xpath:idRelative"],
        ["xpath=//form/input", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "4021e886-ba9b-4083-ba66-13e18608eb19",
      "comment": "",
      "command": "click",
      "target": "css=.suggestionQuery:nth-child(1) > .css-pc5jw7",
      "targets": [
        ["css=.suggestionQuery:nth-child(1) > .css-pc5jw7", "css:finder"],
        ["xpath=//div[@id='headerMenu']/div[2]/div[2]/div/ul/li/span[2]", "xpath:idRelative"],
        ["xpath=//li/span[2]", "xpath:position"],
        ["xpath=//span[contains(.,'Nykaa Cosmetics')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "84ad4fbc-10ee-48ee-90a0-da6e836669c5",
      "comment": "",
      "command": "runScript",
      "target": "window.scrollTo(0,631.2000122070312)",
      "targets": [],
      "value": ""
    }, {
      "id": "c5b8bbd8-59e8-439b-8a59-4fe203492538",
      "comment": "",
      "command": "click",
      "target": "css=.productWrapper:nth-child(1) .css-11gn9r6",
      "targets": [
        ["css=.productWrapper:nth-child(1) .css-11gn9r6", "css:finder"],
        ["xpath=//img[@alt='Nykaa Cosmetics So Creme Bestseller Creamy Matte Lipstick Duo - Game on & Wakeup Makeup']", "xpath:img"],
        ["xpath=//div[@id='product-list-wrap']/div/div/div/a/div/img", "xpath:idRelative"],
        ["xpath=//div/img", "xpath:position"]
      ],
      "value": "",
      "opensWindow": true,
      "windowHandleName": "win8564",
      "windowTimeout": 2000
    }, {
      "id": "6c2327df-9130-4f98-9a67-98ebdb2423bb",
      "comment": "",
      "command": "storeWindowHandle",
      "target": "root",
      "targets": [],
      "value": ""
    }, {
      "id": "906010ac-00cb-44c2-ad3e-8f54e1c4e85a",
      "comment": "",
      "command": "selectWindow",
      "target": "handle=${win8564}",
      "targets": [],
      "value": ""
    }, {
      "id": "b64523d4-08b4-4bf4-ab8c-402d86fc0b26",
      "comment": "",
      "command": "click",
      "target": "css=.css-vp18r8 .btn-text",
      "targets": [
        ["css=.css-vp18r8 .btn-text", "css:finder"],
        ["xpath=//div[@id='app']/div/div[2]/div/div[2]/div/div/div[5]/div/div/button/span", "xpath:idRelative"],
        ["xpath=//button/span", "xpath:position"],
        ["xpath=//span[contains(.,'Add to Bag')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "862864fa-df2c-41bf-afdc-ae4f5b5ac471",
      "comment": "",
      "command": "mouseOver",
      "target": "css=.css-eb12ax",
      "targets": [
        ["css=.css-eb12ax", "css:finder"],
        ["xpath=//div[@id='app']/div/div[2]/div/div[2]/div/div/div[5]/div/div/button", "xpath:idRelative"],
        ["xpath=//div[5]/div/div/button", "xpath:position"],
        ["xpath=//button[contains(.,'Added to Bag')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "31760230-6079-49a6-9947-62f1cced8cd7",
      "comment": "",
      "command": "runScript",
      "target": "window.scrollTo(0,449.6000061035156)",
      "targets": [],
      "value": ""
    }, {
      "id": "f41c662a-1a58-4249-8ebf-2b8811f18d98",
      "comment": "",
      "command": "mouseOut",
      "target": "css=.css-eb12ax",
      "targets": [
        ["css=.css-eb12ax", "css:finder"],
        ["xpath=//div[@id='app']/div/div[2]/div/div[2]/div/div/div[5]/div/div/button", "xpath:idRelative"],
        ["xpath=//div[5]/div/div/button", "xpath:position"],
        ["xpath=//button[contains(.,'Added to Bag')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "37ba0db8-a275-4834-baa5-2f990f7759f2",
      "comment": "",
      "command": "close",
      "target": "",
      "targets": [],
      "value": ""
    }, {
      "id": "498f912e-5ec6-4f7b-a851-666d2ed24a2a",
      "comment": "",
      "command": "selectWindow",
      "target": "handle=${root}",
      "targets": [],
      "value": ""
    }, {
      "id": "944b4874-43b5-4590-9ec1-c0c1ddcc46e5",
      "comment": "",
      "command": "close",
      "target": "",
      "targets": [],
      "value": ""
    }, {
      "id": "0c27125d-737e-4093-9916-66b7461f0ec2",
      "comment": "",
      "command": "selectWindow",
      "target": "handle=${undefined}",
      "targets": [],
      "value": ""
    }]
  }],
  "suites": [{
    "id": "5bf4380d-8e39-4bae-b02d-cb866f28d341",
    "name": "Default Suite",
    "persistSession": false,
    "parallel": false,
    "timeout": 300,
    "tests": ["e20d0eb1-a88c-4501-8bfd-01e40adb5295"]
  }],
  "urls": ["https://www.nykaa.com/"],
  "plugins": []
}