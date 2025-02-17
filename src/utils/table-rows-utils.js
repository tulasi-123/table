const transformData = (data) => {
  // Date format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  // Timeline format
  const formatDateRange = (fromDate, toDate) => {
    const from = new Date(fromDate);
    const to = new Date(toDate);

    const options = { month: "short", day: "numeric" };
    const fromFormatted = from.toLocaleDateString("en-US", options);
    const toFormatted = to.toLocaleDateString("en-US", { day: "numeric" });

    return `${fromFormatted} - ${toFormatted} `;
  };

  // Users array
  const userMap = data?.users?.reduce((acc, user) => {
    acc[user.id] = user?.photo_tiny;
    return acc;
  }, {});

  // Columns array
  const dropdownLabelsObj = data.columns.find(
    (col) => col.type === "dropdown"
  ).settings_str;

  const dropdownLabels = JSON.parse(dropdownLabelsObj)?.labels.reduce(
    (acc, label) => {
      acc[label.id] = label.name;
      return acc;
    },
    []
  );

  const result = data?.items?.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.key === item.id);
    const itemData = item?.column_values?.reduce((obj, value) => {
      if (value.type === "people") {
        const personId = JSON.parse(value.value)?.personsAndTeams[0]?.id;
        obj.people = userMap[personId];
      } else if (value.type === "dropdown") {
        const dropdownIds = JSON.parse(value.value)?.ids;
        obj.dropdown = dropdownIds?.map((id) => dropdownLabels[id]).join(" ");
      } else if (value.type === "date") {
        obj.date = formatDate(JSON.parse(value.value)?.date);
      } else if (value.type === "timeline") {
        obj.timeline =
          value.value !== null
            ? formatDateRange(
                JSON.parse(value.value)?.from,
                JSON.parse(value.value)?.to
              )
            : "-";
      } else if (value.type === "status") {
        obj.labelColor = value?.label_style?.color;
        obj.status = value.label;
      } else {
        obj[value.type] = JSON.parse(value.value);
      }
      return obj;
    });
    if (existingItem) {
      Object.assign(existingItem, itemData);
    } else {
      acc.push({
        key: item.id,
        name: item.name,
        ...itemData,
      });
    }
    return acc;
  }, []);

  return result;
};

export default transformData;
