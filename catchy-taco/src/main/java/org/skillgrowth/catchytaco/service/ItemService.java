package org.skillgrowth.catchytaco.service;

import org.skillgrowth.catchytaco.reposity.entity.Item;
import org.skillgrowth.catchytaco.reposity.entity.ItemRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService
{
    public ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public void ItemService(ItemRepository itemRepository1)
    {
        itemRepository = itemRepository1;
    }

    @PostMapping
    public void save(Item item) {
        itemRepository.save(item);
    }
//
//    public Item put( Item item )
//    {
//        Integer id = item.getId();
//        Item foundItem = itemRepository.getReferenceById((id));
//        foundItem.setId(item.getId());
//        foundItem.setName(item.getName());
//        foundItem.setDescription(item.getDescription());
//        foundItem.setImageUrl(item.getImageUrl());
//        itemRepository.save(foundItem);
//    }
//

    public void delete( Integer itemId )
    {
        itemRepository.deleteById(itemId);
    }


    public List<Item> all()
    {
        return itemRepository.findAll();
    }


    public Optional<Item> findById(Integer itemId )
    {
        return itemRepository.findById(itemId);
    }
}