CREATE TABLE blog.post
(
    post_id integer NOT NULL DEFAULT nextval('blog.post_post_id_seq'::regclass),
    post_date date NOT NULL,
    post_content text COLLATE pg_catalog."default" NOT NULL,
    post_title character varying(20) COLLATE pg_catalog."default" NOT NULL,
    post_category character varying(20) COLLATE pg_catalog."default" NOT NULL,
    user_id integer NOT NULL,
    CONSTRAINT post_pkey PRIMARY KEY (post_id),
    CONSTRAINT post_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES blog."user" (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE blog."user"
(
    user_id integer NOT NULL DEFAULT nextval('blog.user_user_id_seq'::regclass),
    "user_firstName" character varying(20) COLLATE pg_catalog."default" NOT NULL,
    "user_lastName" character varying(20) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_pkey PRIMARY KEY (user_id)
)