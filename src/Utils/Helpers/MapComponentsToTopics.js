export const MapComponentsToTopics = (topics, components) => {
    return topics.map((item) => {
        let result = components.filter(comp => comp.topicId === item.id);
        item["components"] = result.length === 0 ? [{mock: "Пусто"}] : result;
        return item
    })
}