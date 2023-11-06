/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { DoublyLinkedList, walkList } from "./collections";
import { ISegment, SegmentGroup } from "./mergeTreeNodes";

export class SegmentGroupCollection {
	private readonly segmentGroups: DoublyLinkedList<SegmentGroup>;

	constructor(private readonly segment: ISegment) {
		this.segmentGroups = new DoublyLinkedList<SegmentGroup>();
	}

	public get size() {
		return this.segmentGroups.length;
	}

	public get empty() {
		return this.segmentGroups.empty;
	}

	/**
	 * @internal
	 */
	public enqueue(segmentGroup: SegmentGroup) {
		this.segmentGroups.push(segmentGroup);
		segmentGroup.segments.push(this.segment);
	}

	/**
	 * @internal
	 */
	public dequeue(): SegmentGroup | undefined {
		return this.segmentGroups.shift()?.data;
	}

	/**
	 * @internal
	 */
	public pop?(): SegmentGroup | undefined {
		return this.segmentGroups.pop ? this.segmentGroups.pop()?.data : undefined;
	}

	public copyTo(segment: ISegment) {
		walkList(this.segmentGroups, (sg) =>
			segment.segmentGroups.enqueueOnCopy(sg.data, this.segment),
		);
	}

	private enqueueOnCopy(segmentGroup: SegmentGroup, sourceSegment: ISegment) {
		this.enqueue(segmentGroup);
		if (segmentGroup.previousProps) {
			// duplicate the previousProps for this segment
			const index = segmentGroup.segments.indexOf(sourceSegment);
			if (index !== -1) {
				segmentGroup.previousProps.push(segmentGroup.previousProps[index]);
			}
		}
	}
}
