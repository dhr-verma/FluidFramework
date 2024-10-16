/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { SchemaBuilder, leaf } from "../../../domains";
import { InsertableFlexNode, typeNameSymbol } from "../../../feature-libraries";

const builder = new SchemaBuilder({ scope: "Simple Schema" });

// Schema
export const pointSchema = builder.object("point", {
	x: builder.number,
	y: builder.number,
});

export const appSchemaData = builder.intoSchema(builder.sequence(pointSchema));

// Schema aware types

// Example Use

// More Schema aware APIs
{
	type FlexibleNumber = InsertableFlexNode<typeof leaf.number>;

	type FlexiblePoint = InsertableFlexNode<typeof pointSchema>;

	const point: FlexiblePoint = {
		x: 1,
		y: 2,
	};

	const point2: FlexiblePoint = {
		[typeNameSymbol]: pointSchema.name,
		x: 1,
		y: 1,
	};
}
