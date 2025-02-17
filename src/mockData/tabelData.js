const tableData = {
  columns: [
    {
      id: "name",
      title: "Name",
      type: "name",
      settings_str: "{}",
    },
    {
      id: "subitems_mkn1pmw3",
      title: "",
      type: "subtasks",
      settings_str:
        '{"allowMultipleItems":true,"itemTypeName":"column.subtasks.title","displayType":"BOARD_INLINE","boardIds":[8439544375]}',
    },
    {
      id: "person",
      title: "Person",
      type: "people",
      width: 50,

      settings_str: "{}",
    },
    {
      id: "status",
      title: "Status",
      type: "status",
      settings_str:
        '{"done_colors":[1],"labels":{"0":"Working on it","1":"Done","2":"Stuck"},"labels_positions_v2":{"0":0,"1":2,"2":1,"5":3},"labels_colors":{"0":{"color":"#fdab3d","border":"#e99729","var_name":"orange"},"1":{"color":"#00c875","border":"#00b461","var_name":"green-shadow"},"2":{"color":"#df2f4a","border":"#ce3048","var_name":"red-shadow"}}}',
    },
    {
      id: "date4",
      title: "Date",
      type: "date",
      settings_str: "{}",
    },
    {
      id: "text_mkn15azg",
      title: "Text",
      type: "text",
      settings_str: "{}",
    },
    {
      id: "numbers_mkn1bthw",
      title: "Numbers",
      type: "numbers",
      settings_str: "{}",
    },
    {
      id: "timeline_mkn12773",
      title: "Timeline",
      type: "timeline",
      settings_str: '{"hide_footer":false}',
    },
    {
      id: "dropdown_mkn116xh",
      title: "Dropdown",
      type: "dropdown",
      settings_str:
        '{"limit_select":false,"hide_footer":false,"labels":[{"id":1,"name":"Monday"},{"id":2,"name":"Tuesday"},{"id":3,"name":"Wednesday"}],"deactivated_labels":[]}',
    },
  ],
  items: [
    {
      id: "8439516534",
      name: "B0- Item 1",
      column_values: [
        {
          id: "subitems_mkn1pmw3",
          type: "subtasks",
          value: "{}",
        },
        {
          id: "person",
          type: "people",
          value:
            '{"changed_at":"2025-02-10T07:10:27.308Z","personsAndTeams":[{"id":52290468,"kind":"person"}]}',
          persons_and_teams: [
            {
              id: "52290468",
              kind: "person",
            },
          ],
        },
        {
          id: "status",
          type: "status",
          value:
            '{"index":0,"post_id":null,"changed_at":"2019-03-01T17:24:57.321Z"}',
          label: "Working on it",
          index: 0,
          label_style: {
            color: "#fdab3d",
          },
        },
        {
          id: "date4",
          type: "date",
          value:
            '{"date":"2025-02-09","icon":null,"changed_at":"2025-02-10T06:40:29.296Z"}',
        },
        {
          id: "text_mkn15azg",
          type: "text",
          value: '"Test 4"',
        },
        {
          id: "numbers_mkn1bthw",
          type: "numbers",
          value: '"4"',
        },
        {
          id: "timeline_mkn12773",
          type: "timeline",
          value:
            '{"to":"2025-02-20","from":"2025-02-14","changed_at":"2025-02-10T07:07:27.149Z"}',
        },
        {
          id: "dropdown_mkn116xh",
          type: "dropdown",
          value: '{"ids":[1]}',
        },
        {
          id: "connect_boards_mkn1y5h",
          type: "board_relation",
          value:
            '{"changed_at":"2025-02-10T06:46:12.746Z","linkedPulseIds":[{"linkedPulseId":8439527609}]}',
          connectedItemIds: ["8439527609"],
          connectedItems: [
            {
              id: "8439527609",
            },
          ],
        },
      ],
    },
    {
      id: "8439516544",
      name: "B0- Item 2",
      column_values: [
        {
          id: "subitems_mkn1pmw3",
          type: "subtasks",
          value: "{}",
        },
        {
          id: "person",
          type: "people",
          value:
            '{"changed_at":"2025-02-10T07:10:31.001Z","personsAndTeams":[{"id":39240329,"kind":"person"}]}',
          persons_and_teams: [
            {
              id: "39240329",
              kind: "person",
            },
          ],
        },
        {
          id: "status",
          type: "status",
          value:
            '{"index":1,"post_id":null,"changed_at":"2019-03-01T17:28:23.178Z"}',
          label: "Done",
          index: 1,
          label_style: {
            color: "#00c875",
          },
        },
        {
          id: "date4",
          type: "date",
          value:
            '{"date":"2025-02-07","icon":null,"changed_at":"2025-02-10T06:40:29.115Z"}',
        },
        {
          id: "text_mkn15azg",
          type: "text",
          value: '"Test 6"',
        },
        {
          id: "numbers_mkn1bthw",
          type: "numbers",
          value: '"5"',
        },
        {
          id: "timeline_mkn12773",
          type: "timeline",
          value:
            '{"to":"2025-02-23","from":"2025-02-21","changed_at":"2025-02-10T07:07:41.633Z"}',
        },
        {
          id: "dropdown_mkn116xh",
          type: "dropdown",
          value: null,
        },
        {
          id: "connect_boards_mkn1y5h",
          type: "board_relation",
          value:
            '{"changed_at":"2025-02-10T06:46:17.164Z","linkedPulseIds":[{"linkedPulseId":8439527611},{"linkedPulseId":8439527609}]}',
          connectedItemIds: ["8439527611", "8439527609"],
          connectedItems: [
            {
              id: "8439527611",
            },
            {
              id: "8439527609",
            },
          ],
        },
      ],
    },
    {
      id: "8439516554",
      name: "B0- Item 3",
      column_values: [
        {
          id: "subitems_mkn1pmw3",
          type: "subtasks",
          value: "{}",
        },
        {
          id: "person",
          type: "people",
          value:
            '{"changed_at":"2025-02-10T07:10:37.473Z","personsAndTeams":[{"id":39240329,"kind":"person"}]}',
          persons_and_teams: [
            {
              id: "39240329",
              kind: "person",
            },
          ],
        },
        {
          id: "status",
          type: "status",
          value:
            '{"index":5,"post_id":null,"changed_at":"2019-03-01T17:25:02.248Z"}',
          label: null,
          index: 5,
          label_style: {
            color: "#c4c4c4",
          },
        },
        {
          id: "date4",
          type: "date",
          value:
            '{"date":"2025-02-07","icon":null,"changed_at":"2025-02-10T06:40:29.115Z"}',
        },
        {
          id: "text_mkn15azg",
          type: "text",
          value: '"Test 6"',
        },
        {
          id: "numbers_mkn1bthw",
          type: "numbers",
          value: '"678"',
        },
        {
          id: "timeline_mkn12773",
          type: "timeline",
          value: null,
        },
        {
          id: "dropdown_mkn116xh",
          type: "dropdown",
          value: null,
        },
        {
          id: "connect_boards_mkn1y5h",
          type: "board_relation",
          value: "{}",
          connectedItemIds: [],
          connectedItems: [],
        },
      ],
    },
    {
      id: "8439516568",
      name: "B0- Item 4",
      column_values: [
        {
          id: "subitems_mkn1pmw3",
          type: "subtasks",
          value: "{}",
        },
        {
          id: "person",
          type: "people",
          value: null,
          persons_and_teams: [],
        },
        {
          id: "status",
          type: "status",
          value: null,
          label: null,
          index: null,
          label_style: {
            color: "#c4c4c4",
          },
        },
        {
          id: "date4",
          type: "date",
          value:
            '{"date":"2025-02-06","icon":null,"changed_at":"2025-02-10T06:40:29.458Z"}',
        },
        {
          id: "text_mkn15azg",
          type: "text",
          value: null,
        },
        {
          id: "numbers_mkn1bthw",
          type: "numbers",
          value: null,
        },
        {
          id: "timeline_mkn12773",
          type: "timeline",
          value: null,
        },
        {
          id: "dropdown_mkn116xh",
          type: "dropdown",
          value: '{"ids":[3]}',
        },
        {
          id: "connect_boards_mkn1y5h",
          type: "board_relation",
          value:
            '{"changed_at":"2025-02-10T06:46:25.517Z","linkedPulseIds":[{"linkedPulseId":8439527612},{"linkedPulseId":8439527609}]}',
          connectedItemIds: ["8439527612", "8439527609"],
          connectedItems: [
            {
              id: "8439527612",
            },
            {
              id: "8439527609",
            },
          ],
        },
      ],
    },
    {
      id: "8439516559",
      name: "B0- Item 5",
      column_values: [
        {
          id: "subitems_mkn1pmw3",
          type: "subtasks",
          value: "{}",
        },
        {
          id: "person",
          type: "people",
          value: null,
          persons_and_teams: [],
        },
        {
          id: "status",
          type: "status",
          value: null,
          label: null,
          index: null,
          label_style: {
            color: "#c4c4c4",
          },
        },
        {
          id: "date4",
          type: "date",
          value:
            '{"date":"2025-02-09","icon":null,"changed_at":"2025-02-10T06:40:29.296Z"}',
        },
        {
          id: "text_mkn15azg",
          type: "text",
          value: null,
        },
        {
          id: "numbers_mkn1bthw",
          type: "numbers",
          value: null,
        },
        {
          id: "timeline_mkn12773",
          type: "timeline",
          value: null,
        },
        {
          id: "dropdown_mkn116xh",
          type: "dropdown",
          value: null,
        },
        {
          id: "connect_boards_mkn1y5h",
          type: "board_relation",
          value: "{}",
          connectedItemIds: [],
          connectedItems: [],
        },
      ],
    },
  ],
  users: [
    {
      id: "17067431",
      name: "Kranthi Kiran",
      photo_tiny:
        "https://files.monday.com/use1/photos/17067431/tiny/17067431-data?1604906996",
    },
    {
      id: "39240329",
      name: "shalini",
      photo_tiny:
        "https://files.monday.com/use1/photos/39240329/tiny/39240329-user_photo_initials_2023_02_06_09_19_55.png?1675675195",
    },
    {
      id: "45604629",
      name: "Manav Bansal",
      photo_tiny:
        "https://files.monday.com/use1/photos/45604629/tiny/45604629-user_photo_initials_2023_07_13_04_52_30.png?1689223950",
    },
    {
      id: "52290468",
      name: "Hameeda Begum",
      photo_tiny:
        "https://files.monday.com/use1/photos/52290468/tiny/52290468-user_photo_2023_11_29_09_09_37.png?1701248977",
    },
    {
      id: "55297159",
      name: "Abhijeet Singh",
      photo_tiny:
        "https://files.monday.com/use1/photos/55297159/tiny/55297159-user_photo_initials_2024_02_01_10_19_29.png?1706782769",
    },
    {
      id: "60040526",
      name: "Megha Chakraborty",
      photo_tiny:
        "https://files.monday.com/use1/photos/60040526/tiny/60040526-user_photo_initials_2024_04_23_15_29_34.png?1713886174",
    },
    {
      id: "68041613",
      name: "Test User",
      photo_tiny:
        "https://files.monday.com/use1/photos/68041613/tiny/68041613-user_photo_initials_2024_11_01_07_08_55.png?1730444935",
    },
    {
      id: "71545707",
      name: "Kaviyakavi",
      photo_tiny:
        "https://files.monday.com/use1/photos/71545707/tiny/71545707-user_photo_initials_2025_01_29_15_04_24.png?1738163064",
    },
    {
      id: "72039633",
      name: "stndatthu1994@gmail.com",
      photo_tiny: "https://cdn1.monday.com/dapulse_default_photo.png",
    },
  ],
};

export default tableData;
