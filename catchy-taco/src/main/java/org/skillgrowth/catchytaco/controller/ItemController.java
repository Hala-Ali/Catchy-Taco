package org.skillgrowth.catchytaco.controller;

import org.skillgrowth.catchytaco.controller.dto.ItemDto;
import org.skillgrowth.catchytaco.reposity.entity.Item;
import org.skillgrowth.catchytaco.reposity.entity.ItemRepository;
import org.skillgrowth.catchytaco.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/item")
public class ItemController {

    final ItemService itemService;

//    final ItemRepository itemRepository;

    public ItemController(@Autowired ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/all")
    public Iterable<Item> getItems() {
        return itemService.all();
    }

    @CrossOrigin
    @PostMapping
    public void save(@RequestBody ItemDto itemDto) {
        itemService.save(new Item (itemDto));
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Optional<Item> findItemById(@PathVariable Integer id){
        return itemService.findById(id);
    }

    @CrossOrigin
    @PutMapping( "/{id}" )
    public void update( @RequestBody ItemDto itemDto, @PathVariable Integer id )
    {
        Item item = itemService.findById( id ).orElseThrow();
        item.setName(itemDto.getName());
        item.setDescription(itemDto.getDescription());
        item.setImageUrl(itemDto.getImageUrl());
        itemService.save( item );
    }

    @CrossOrigin
    @DeleteMapping( "/{id}" )
    public void delete( @PathVariable Integer id )
    {
        itemService.delete( id );
    }
}
