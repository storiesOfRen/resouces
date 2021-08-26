import React, { ReactElement, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    createTag, 
    deleteTag,
    selectTags
  } from './tagsSlice';
import styles from './Tags.module.scss';

const Chip =({tag, handleRemove}:{tag:string; handleRemove: ()=>void}):ReactElement=>{
    return <div className={styles.tagsChip}>
        <span className={styles.tagsChipTag}>{tag}</span>
        <button className={styles.tagsChipClose} onClick={handleRemove}>✕</button>
    </div>
}

export function Tag() {
    const [newTag, setNewTag] = useState<string>('')
    const tags = useAppSelector(selectTags);
    const dispatch = useAppDispatch();

    const handleRemove = async (idx:number)=>{
        await dispatch(deleteTag(idx))
    }

    return (
    <section className={styles.tags}>
        <div className={styles.tagsContainer} aria-live="polite">
        {tags.length ? (tags.map((tag: string, idx: number)=>{
            return <Chip key={idx} tag={tag} handleRemove={()=>handleRemove(idx)}/>
        })): (<></>)}
        </div>
        <form className={styles.tagsForm} onSubmit={async (e)=>{
            e.preventDefault()
            await dispatch(createTag(newTag))
            setNewTag('');
            }}>
                <label className={styles.tagsInputLabel}>
                    Create a New Tag
                    <input className={styles.tagsInput} value={newTag} onChange={(e)=>{setNewTag(e.target.value)}} type="text"/>
                </label>
                <input className={styles.tagsSubmit} type="submit" />

        </form>



    </section>
    );
}