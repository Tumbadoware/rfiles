<script>
function webretroEmbed(node, path, queries) {
	var frame = document.createElement("iframe");
	frame.style = "border: none; display: block; width: 100%; height: 100%;";
	
	// change rom path to absolute if it isn't already
	if (queries.rom) {
		var link = document.createElement("a");
		link.href = /^(http:\/\/|https:\/\/|\/\/)/i.test(queries.rom) ?core=nestopia&rom=https://doc-0k-90-docs.googleusercontent.com/docs/securesc/msa02ftnk1v7qs4ra7npkgvdmga82cnr/q6607sv3gd06c10sjiuu33ve5dlnj2mk/1646259375000/03647310625643973541/03647310625643973541/1W6w7Sw4PvcmR_ZO0usT4amskfoAldSjD?e=download&ax=ACxEAsY4EEncqTG1fgP12vGjNgzC6ogpxNyoHOFIHfZA6Ac1hcCi60Y7RO-JFvnjFbuflKeyI-TKP87EkTx6gNIGHdbra-D2Ns5Qc5fDD9r8Y2Jad5WkxVGK4crDDMOgP2z2cNDiAdm4Qdi_-_oqL8Aa3pUHY7Db5_uqFMRWubnvKjTUBwiWqKbyTs0A3ibky_lcJEym7UhDL7ggPeVFQYqM5BM43-5KXqvSsU832NZ40LiH3PaRHeGUjWwxL2uveSpFqzppD5Mul9uArZNaeDDk-UWtiugs_V1_LdFAc07hGo6YLwJd31PJkYKSDgmHbcfT94o8tIN13l54HsD3LslEbA6n2nsW4KOyYkoRWLM5t1XZIXVRVWhbJII1YR-oTccWQ-OY56Wo9ZjF4BDhsxPULZ0jEOV_rcZ_6-B8CEfRNoxFwKDuPAFxmYkNGM_pbTso9AjCT9EecQINXFgCQNCvomKWo7jaZqJIlnIfg3Dpn8bCdndf2S8yPEcS0D7qnFjEwqo7JkzWjHzF8JqnZrdvkHGHqIRPPljL569WfYqZqN5Zhh-MaEo7dATV2gRoz0dJnyeoYLC703FzRvzAL60og1_ixLzQzZmqKxWkXR846Zmwp25XEAtXzVJq7pOIubcFCIwTWkfsRbB2F-pFTgkzjXwwGcWCmaWGJcY&authuser=0&nonce=m5p01o9ivocga&user=03647310625643973541&hash=fh2tg433j2qb48pc4bpt05g3cqgejr8n queries.rom : "roms/" + queries.rom;
		queries.rom = link.href;
	}
	
	var queriesList = Object.keys(queries);
	var newQueriesList = [];
	for (var i = 0; i < queriesList.length; i++) {
		newQueriesList.push(queriesList[i] + "=" + queries[queriesList[i]]);
	}
	frame.src = path + "?" + newQueriesList.join("&");
	node.appendChild(frame);
	
	return frame;
}
</script>
