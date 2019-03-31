1. javax.persistence.GenerationType
2. 

	Hibernate: 
    
    drop table t_menu if exists
Hibernate: 
    
    drop table t_order if exists
Hibernate: 
    
    drop table t_order_coffee if exists
Hibernate: 
    
    drop sequence if exists hibernate_sequence
Hibernate: create sequence hibernate_sequence start with 1 increment by 1
Hibernate: 
    
    create table t_menu (
       id bigint not null,
        create_time timestamp,
        update_time timestamp,
        name varchar(255),
        price decimal(19,2),
        primary key (id)
    )
Hibernate: 
    
    create table t_order (
       id bigint not null,
        create_time timestamp,
        update_time timestamp,
        customer varchar(255),
        state integer not null,
        primary key (id)
    )
Hibernate: 
    
    create table t_order_coffee (
       coffee_order_id bigint not null,
        items_id bigint not null
    )
Hibernate: 
    
    alter table t_order_coffee 
       add constraint FKj2swxd3y69u2tfvalju7sr07q 
       foreign key (items_id) 
       references t_menu
Hibernate: 
    
    alter table t_order_coffee 
       add constraint FK33ucji9dx64fyog6g17blpx9v 
       foreign key (coffee_order_id) 
       references t_order


3. org.springframework.data.jpa.repository.config.EnableJpaRepositories
   org.springframework.data.repository.PagingAndSortingRepository

4. org.apache.ibatis.type.BaseTypeHandler
