report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_test-card-default_0_data-qacard_0_tablet_h.png",
        "test": "..\\bitmaps_test\\20190531-010417\\test_test-card-default_0_data-qacard_0_tablet_h.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "test_test-card-default_0_data-qacard_0_tablet_h.png",
        "label": "test-card-default",
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 2,
            "height": -30
          },
          "misMatchPercentage": "39.21",
          "analysisTime": 32
        },
        "diffImage": "..\\bitmaps_test\\20190531-010417\\failed_diff_test_test-card-default_0_data-qacard_0_tablet_h.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_test-card-hover_0_data-qacard_0_tablet_h.png",
        "test": "..\\bitmaps_test\\20190531-010417\\test_test-card-hover_0_data-qacard_0_tablet_h.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "test_test-card-hover_0_data-qacard_0_tablet_h.png",
        "label": "test-card-hover",
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 2,
            "height": -30
          },
          "misMatchPercentage": "39.21",
          "analysisTime": 36
        },
        "diffImage": "..\\bitmaps_test\\20190531-010417\\failed_diff_test_test-card-hover_0_data-qacard_0_tablet_h.png"
      },
      "status": "fail"
    }
  ],
  "id": "test"
});